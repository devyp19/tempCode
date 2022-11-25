import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://awmgldofkkbalduukncj.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF3bWdsZG9ma2tiYWxkdXVrbmNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYzMjkyMTIsImV4cCI6MTk4MTkwNTIxMn0.7OTMNg_UH2n4h4uq_-43cM6FHQbizJLA6IDcjMZjPgg"
);
