import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import { Song } from "@/types";

// import supabase from "@/config/supabaseClient";

const getSongs = async (): Promise<Song[]> => {
  const supabase = createServerComponentClient({cookies})

  const { data, error } = await supabase
    .from('songs')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.log(error.message);
  }
  console.log(data)
  return (data as any) || [];
};

export default getSongs;