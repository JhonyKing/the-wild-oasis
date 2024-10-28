import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://zsdvbtezkxpqcaazblat.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzZHZidGV6a3hwcWNhYXpibGF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMTc2NDYsImV4cCI6MjAzOTc5MzY0Nn0.tAkQxb9g-6kxg9X_eocoCJ4RiWurpdsp8JCdsiCSTNg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
