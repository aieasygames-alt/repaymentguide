'use client';

import { supabase, type Database } from './supabase';

function getSupabase() {
  if (!supabase) {
    throw new Error('Supabase not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY environment variables.');
  }
  return supabase;
}

type Calculation = Database['public']['Tables']['calculations']['Insert'];

export async function saveCalculation(calculation: Omit<Calculation, 'user_id'>) {
  const client = getSupabase();
  const { data: { user } } = await client.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { data, error } = await client
    .from('calculations')
    .insert({
      ...calculation,
      user_id: user.id,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getCalculations(type?: string) {
  const client = getSupabase();
  const { data: { user } } = await client.auth.getUser();
  if (!user) return [];

  let query = client
    .from('calculations')
    .select('*')
    .eq('user_id', user.id)
    .order('created_at', { ascending: false });

  if (type) {
    query = query.eq('calculation_type', type);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data;
}

export async function deleteCalculation(id: string) {
  const client = getSupabase();
  const { data: { user } } = await client.auth.getUser();
  if (!user) throw new Error('User not authenticated');

  const { error } = await client
    .from('calculations')
    .delete()
    .eq('id', id)
    .eq('user_id', user.id);

  if (error) throw error;
}
