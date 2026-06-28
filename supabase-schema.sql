-- Enable Row Level Security
ALTER TABLE auth.users ENABLE ROW LEVEL SECURITY;

-- Create calculations table
CREATE TABLE IF NOT EXISTS public.calculations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  calculation_type TEXT NOT NULL CHECK (calculation_type IN ('payment', 'idr', 'pslf')),
  inputs JSONB NOT NULL,
  results JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS calculations_user_id_idx ON public.calculations(user_id);
CREATE INDEX IF NOT EXISTS calculations_type_idx ON public.calculations(calculation_type);

-- Enable RLS
ALTER TABLE public.calculations ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own calculations"
  ON public.calculations FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own calculations"
  ON public.calculations FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own calculations"
  ON public.calculations FOR DELETE
  USING (auth.uid() = user_id);

-- Grant access
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON public.calculations TO authenticated;
GRANT SELECT ON public.calculations TO anon;
