'use client'

import supabase from "@/config/supabaseClient";
import { Song } from "@/types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";

const useLoadImage = (data:Song)=>{
    const supabaseClient = useSupabaseClient()
    console.log(data)

    if (!data){
        return null
    }
    const {data:imageData} = supabaseClient.storage.from('images').getPublicUrl(data.image_path)
    return imageData.publicUrl
} 

export default useLoadImage