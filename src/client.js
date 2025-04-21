
//Set up supabase
import { createClient } from '@supabase/supabase-js'


const URL = 'https://ezcszwnohwazhwuabkzb.supabase.co';

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6Y3N6d25vaHdhemh3dWFia3piIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2MDgyMzAsImV4cCI6MjA2MDE4NDIzMH0.hKSe2MS5XmvLJ2B07Mztu2oP8aZKFDQTzBZ1m14PyDI"

export const supabase = createClient(URL, API_KEY)


