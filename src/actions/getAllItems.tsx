import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

export const getAllProducts = async () => {

    // toast.success(userId!);
    const { data, error } = await supabase
        .from('items')
        .select("*")
        .eq("listed",true)


    if(data){
        return data;
    }
    if(error){
        toast.error(error.message);
    }
}

