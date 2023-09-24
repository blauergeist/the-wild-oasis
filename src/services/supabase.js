import { createClient } from "@supabase/supabase-js";

// export const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
// const supabase = createClient(supabaseUrl, supabaseKey);

export const supabaseUrl = "https://xchxbxjgikafmehkxebr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjaHhieGpnaWthZm1laGt4ZWJyIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU1NjUyMTYsImV4cCI6MjAxMTE0MTIxNn0.Ekh0-7qn6nPVXHQpQbihpgeXbSWPoBUPkFl0rgYyJW0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
