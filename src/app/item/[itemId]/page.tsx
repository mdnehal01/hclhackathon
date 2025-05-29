import { getItemById } from "@/actions/getItemById";
import ItemInfo from "@/Components/ItemInfo";

const Page = async ({ params }: { params: Promise<{ productId: string }> }) => {
    const resolvedParams = await params;
    const itemId = resolvedParams.productId;
    const item = await getItemById(itemId);
    if(!item) return <>No item</>
    return (
        <div className="w-full h-[calc(100vh-80px)] overflow-auto">
            <ItemInfo item={item}/>
        </div>
    );
  };
  
  export default Page;
  