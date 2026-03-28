import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { supabase } from '../lib/supabase';

// Admin credentials - change this password as needed
const ADMIN_PASSWORD = 'Mani@0310';

export default function Admin({ onBack }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [submissions, setSubmissions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if already logged in (session storage)
    const session = sessionStorage.getItem('adminAuth');
    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchSubmissions();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('adminAuth', 'true');
      setLoginError('');
    } else {
      setLoginError('Incorrect password');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('adminAuth');
    onBack();
  };

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this submission?')) return;
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      setSubmissions(submissions.filter((s) => s.id !== id));
      if (selectedId === id) setSelectedId(null);
    } catch (error) {
      console.error('Error deleting submission:', error);
      alert('Failed to delete. Please try again.');
    }
  };

  const handleClearAll = async () => {
    if (!confirm('Are you sure you want to delete ALL submissions?')) return;
    
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .delete()
        .neq('id', '00000000-0000-0000-0000-000000000000'); // Delete all rows
      
      if (error) throw error;
      setSubmissions([]);
      setSelectedId(null);
    } catch (error) {
      console.error('Error clearing submissions:', error);
      alert('Failed to clear. Please try again.');
    }
  };

  const selected = submissions.find((s) => s.id === selectedId);

  const formatDate = (iso) => {
    const d = new Date(iso);
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="admin-page admin-login-page">
        <motion.div
          className="admin-login-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="admin-login-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
          </div>
          <h1>Admin Access</h1>
          <p>Enter your password to access the admin panel</p>
          
          <form onSubmit={handleLogin}>
            <div className="admin-login-field">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoFocus
              />
            </div>
            {loginError && <span className="admin-login-error">{loginError}</span>}
            <button type="submit" className="btn-primary btn-full">
              <span>Login</span>
              <span className="btn-icon">→</span>
            </button>
          </form>
          
          <button className="admin-login-back" onClick={onBack}>
            ← Back to website
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="admin-header">
        <button className="admin-back" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          <span>Back to Site</span>
        </button>
        <h1 className="admin-title">Client Inquiries</h1>
        <div className="admin-actions">
          <span className="admin-count">{submissions.length} submissions</span>
          {submissions.length > 0 && (
            <button className="admin-clear" onClick={handleClearAll}>Clear All</button>
          )}
          <button className="admin-logout" onClick={handleLogout}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            Logout
          </button>
        </div>
      </div>

      <div className="admin-layout">
        {/* Left: List */}
        <div className="admin-list">
          {loading ? (
            <div className="admin-empty">
              <p>Loading submissions...</p>
            </div>
          ) : submissions.length === 0 ? (
            <div className="admin-empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
              <p>No submissions yet</p>
              <span>Client messages will appear here when they submit the contact form.</span>
            </div>
          ) : (
            submissions.map((sub) => (
              <motion.div
                key={sub.id}
                className={`admin-card ${selectedId === sub.id ? 'active' : ''}`}
                onClick={() => setSelectedId(sub.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="ac-top">
                  <span className="ac-name">{sub.name}</span>
                  <span className="ac-type">{sub.website_type}</span>
                </div>
                <span className="ac-email">{sub.email}</span>
                <span className="ac-date">{formatDate(sub.created_at)}</span>
              </motion.div>
            ))
          )}
        </div>

        {/* Right: Detail */}
        <AnimatePresence mode="wait">
          {selected ? (
            <motion.div
              key={selected.id}
              className="admin-detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
            >
              <div className="ad-header">
                <h2>{selected.name}</h2>
                <button className="ad-delete" onClick={() => handleDelete(selected.id)}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                </button>
              </div>

              <div className="ad-grid">
                <div className="ad-field">
                  <span className="ad-label">Email</span>
                  <a href={`mailto:${selected.email}`} className="ad-value ad-link">{selected.email}</a>
                </div>
                <div className="ad-field">
                  <span className="ad-label">Phone</span>
                  <a href={`tel:${selected.phone}`} className="ad-value ad-link">{selected.phone}</a>
                </div>
                <div className="ad-field">
                  <span className="ad-label">Website Type</span>
                  <span className="ad-value ad-badge">{selected.website_type}</span>
                </div>
                <div className="ad-field">
                  <span className="ad-label">Submitted</span>
                  <span className="ad-value">{formatDate(selected.created_at)}</span>
                </div>
              </div>

              <div className="ad-message">
                <span className="ad-label">Message</span>
                <p>{selected.message || <em style={{ opacity: 0.5 }}>No message provided</em>}</p>
              </div>

              <div className="ad-actions">
                <a href={`mailto:${selected.email}`} className="btn-primary">
                  <span>Reply via Email</span>
                  <span className="btn-icon">→</span>
                </a>
                <a href={`tel:${selected.phone}`} className="btn-ghost">
                  Call Now
                </a>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="admin-detail admin-detail-empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
              </svg>
              <p>Select a submission to view details</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
