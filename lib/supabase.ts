import { createClient } from '@supabase/supabase-js';

const getSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Only create client if we have valid URL and key
  // During build time or when not configured, return null
  if (!supabaseUrl || !supabaseAnonKey ||
      supabaseUrl.includes('your-project-url') ||
      supabaseAnonKey.includes('your-anon-key')) {
    return null;
  }

  try {
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch {
    return null;
  }
};

export const supabase = getSupabase();

export type Database = {
  public: {
    Tables: {
      calculations: {
        Row: {
          id: string;
          user_id: string;
          calculation_type: 'payment' | 'idr' | 'pslf';
          inputs: unknown;
          results: unknown;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          calculation_type: 'payment' | 'idr' | 'pslf';
          inputs: unknown;
          results: unknown;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          calculation_type?: 'payment' | 'idr' | 'pslf';
          inputs?: unknown;
          results?: unknown;
          created_at?: string;
        };
      };
      users: {
        Row: {
          id: string;
          email: string;
          created_at: string;
          loan_balance?: number;
          income?: number;
          family_size?: number;
          state?: string;
        };
        Insert: {
          id?: string;
          email: string;
          created_at?: string;
          loan_balance?: number;
          income?: number;
          family_size?: number;
          state?: string;
        };
        Update: {
          id?: string;
          email?: string;
          created_at?: string;
          loan_balance?: number;
          income?: number;
          family_size?: number;
          state?: string;
        };
      };
    };
  };
};
