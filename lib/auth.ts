'use client';

import type { Session } from '@supabase/supabase-js';
import { supabase } from './supabase';

function getSupabase() {
  if (!supabase) {
    throw new Error('Supabase not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
  }
  return supabase;
}

export async function signInWithGoogle() {
  const client = getSupabase();
  const { data, error } = await client.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${window.location.origin}/dashboard`,
    },
  });

  if (error) throw error;
  return data;
}

export async function signOut() {
  const client = getSupabase();
  const { error } = await client.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const client = getSupabase();
  const { data: { user }, error } = await client.auth.getUser();
  if (error) throw error;
  return user;
}

export function onAuthStateChange(callback: (event: string, session: Session | null) => void) {
  const client = getSupabase();
  const { data: { subscription } } = client.auth.onAuthStateChange(callback);
  return subscription;
}
