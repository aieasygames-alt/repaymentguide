import { createClient } from '@supabase/supabase-js';

const getSupabase = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseAnonKey) {
    // Return null client for server-side rendering
    return null;
  }

  return createClient(supabaseUrl, supabaseAnonKey);
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
          inputs: any;
          results: any;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          calculation_type: 'payment' | 'idr' | 'pslf';
          inputs: any;
          results: any;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          calculation_type?: 'payment' | 'idr' | 'pslf';
          inputs?: any;
          results?: any;
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
