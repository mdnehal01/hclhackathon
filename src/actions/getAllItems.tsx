import { supabase } from "@/lib/supabase";

export const getAllItems = async () => {

    // toast.success(userId!);
    const { data, error } = await supabase
        .from('items')
        .select("*")
        .eq("listed",true)


    if(data){
        return data;
    }
    if(error){
        console.log(error.message);
    }
}

