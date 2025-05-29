"use client"
import React, { useState } from 'react'
import { Items } from '@/types'
import Image from "next/image";
import { IoIosWarning, IoMdCash } from "react-icons/io";


interface ProductInfoProps {
    item: Items;
}

const ItemInfo: React.FC<ProductInfoProps> = ({ item }) => {
    const curPrice = Number(item.price).toLocaleString("en-IN")
    const condition = item.rating?.toString();
    const discount = +(100 - ((item.price / item.price) * 100)).toFixed(2);

    const [imageShown, setImageShown] = useState(item.image_urls.primary[0]);
    
    if (!item) return <div>Oh no! nothing found.</div>

    return (
        <div className='h-full w-full px-20 flex py-12'>
            {/* LEFT SIDE */}
            <div id='left' className='h-full w-1/2 flex flex-col gap-y-6 px-10 py-5'>
                <div className="relative">
                    <h1 className='text-black font-normal text-5xl'>{item.title.toUpperCase()}</h1>
                    {discount !== 0 && (
                        <div className="bg-pink-500 text-white absolute -left-8 -top-8 px-3 py-1 rounded-full">
                            -{discount.toFixed(0)}%
                        </div>
                    )}
                </div>

                <div>
                    Seller rating:
                </div>

                {item.price === item.price ? (
                    <p className="text-lg font-bold">₹{curPrice}</p>
                ) : (
                    <div className="flex relative gap-x-2 items-center">
                        <p className="text-lg font-bold text-black">₹{curPrice}</p>
                        <p className="text-sm font-medium text-neutral-600 line-through">₹{item.price}</p>
                    </div>
                )}

                <div className="border border-black w-fit rounded-md px-2 gap-x-2 rating items-center flex-row-reverse">
                    <div>
                        {[5, 4, 3, 2, 1].map((value) => (
                            <React.Fragment key={value}>
                                <input
                                    type="radio"
                                    id={`star${value}`}
                                    name="condition"
                                    value={value}
                                    defaultChecked={condition === value.toString()}
                                    readOnly
                                    disabled
                                />
                                <label htmlFor={`star${value}`}></label>
                            </React.Fragment>
                        ))}
                    </div>
                    <h1>Condition</h1>
                </div>
                <div className="flex items-center text-red-600">
                    <IoIosWarning color="red"/>&nbsp;
                    Defect: {item.defect}
                </div>
                <div className="w-full">
                    <h6 className='text-md font-medium'>{item.description}</h6>
                </div>
                {item.allow_cod ? (
                    <div className="w-fit flex px-2 bg-white gap-2 items-center border">
                        <IoMdCash className="text-blue-500"/>
                        <h6 className='text-md font-medium'>Cash on delivery available</h6>
                    </div>
                ) : (
                    <div className="w-fit px-2 bg-white flex gap-2 items-center border">
                        <IoMdCash className="text-blue-700"/>
                        <h6 className='text-md font-medium'>Cash on delivery is not available</h6>
                    </div>
                )}
                <div className="flex flex-col justify-center">
                    <div className="flex gap-5">
                        <AddToCartBtn2 itemId={item.item_id}/>
                        <BuyNowBtn item={item}/>
                    </div>

                    {/* TODO: Contact seller Only for premium seller */}
                    <div className="flex"></div>
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div id='right' className=' bg-pink-200 h-full w-1/2 flex flex-col items-center gap-y-6 px-10 py-5'>
                {/* Preview Image */}
                <div id="preview-box" className="h-[500px] w-[500px] bg-white border border-pink-700 rounded overflow-hidden p-5">
                    <div className="relative h-full w-full">
                    <Image
                        src={`${PrelinkImage}${imageShown}`}
                        alt={item.title}
                        fill
                        className="object-contain"
                    />
                    </div>

                </div>

                {/* Thumbnail Gallery */}
                <div className="flex gap-x-5 justify-start h-32 w-full overflow-x-auto">
                    {item.image_urls.primary.map((url, index) => (
                        <div
                            onClick={() => setImageShown(url)}
                            key={index}
                            className="h-32 w-32 aspect-square border p-2 border-pink-700 rounded grid place-items-center bg-white overflow-hidden cursor-pointer"
                        >
                            <Image
                                src={`${PrelinkImage}${url}`}
                                height={100}
                                width={100}
                                alt={item.title}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemInfo;
