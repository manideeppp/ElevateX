import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oxmjdnnmudnfpadpptrq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94bWpkbm5tdWRuZnBhZHBwdHJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2NjcxMDMsImV4cCI6MjEwMTI0MzEwM30.CImBET3D1hso5zEjJdZoFa-qPIGvOZBFr6TLK2iJUPQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
