"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

import { Database } from "@/types_db";

interface SupabaseProviderProps {
  children: React.ReactNode;
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({
  children
}) => {
  const [supabaseClient] = useState(() =>
  createClientComponentClient<Database>({
    supabaseUrl:'https://gtncvhcwasxrwvgkgvny.supabase.co',
    supabaseKey:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0bmN2aGN3YXN4cnd2Z2tndm55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA5NzAwMDIsImV4cCI6MjAwNjU0NjAwMn0.9nusTNRr-ArSmftkAtmuvvYvcB9EGe8-r8KGKm7vXtQ'
  })
  );

  return ( 
    <SessionContextProvider supabaseClient={supabaseClient}>
      {children}
    </SessionContextProvider>
  );
}
 
export default SupabaseProvider;