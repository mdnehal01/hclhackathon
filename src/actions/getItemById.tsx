import {supabase} from "@/lib/supabase"

export const getItemById = async (itemId:string) => {
    const {data, error} = await supabase
        .from('items')
        .select('*')
        .eq('item_id', Number(itemId))

    if(error){
        console.log(error.message);
    }else{
        return data
    }
}