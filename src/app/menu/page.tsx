import { getAllItems } from '@/actions/getAllItems';
import MenuContent from '@/Components/MenuContent';
import Link from 'next/link';
import React from 'react'

const page = async () => {
    const menu = await getAllItems();
    if(!menu){
        return(
            <div className='h-screen w-screen'>
                <span>No Item in the menu</span>
                <Link href={"/"}>Go to home page</Link>
            </div>
        )
    }
    return (
        <div className='flex'>
            <div className='w-2/3 p-16'>
                <MenuContent items={menu}/>
            </div>
        </div>
    )
}

export default page;