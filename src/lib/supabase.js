import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ygyptlfhjmhmubrlpahz.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlneXB0bGZoam1obXVicmxwYWh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ1NDM2ODYsImV4cCI6MjA5MDExOTY4Nn0.a0HLB1Ql3J-R8RsMRLX0wc_XXA9gTIRhk2QsmzF_kRU';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
