"use client"
import React, { useState } from 'react'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
import { BiSolidCameraPlus } from 'react-icons/bi'


const ProductAddForm = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("You can write or generate description");
    const [price, setPrice] = useState("");
    const [descriptionLoading, setDescriptionLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    const { user, isLoading } = useUser();
    const router = useRouter();


    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [imageFiles, setImageFiles] = useState<FileList | null>(null);

    if(isLoading) {
        return(
            <>Loading</>
        )
    }


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files) {
            setImageFiles(files);
            const urls = Array.from(files).map(file => URL.createObjectURL(file));
            setImagePreviews(urls);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        // Append multiple images to formData
        if (imageFiles) {
            Array.from(imageFiles).forEach((file) => {
                formData.append("files", file);
            });
        }

        // TODO upload items
    };

    const fileToBase64 = (file: File): Promise<string> =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
        });

    const generateAutoDescription = async (title:string) => {
        if(!title || !imageFiles){
            toast.error("Title or image missing")
            return
        }
        setDescriptionLoading(true)
        if (!imageFiles) return;

        const base64Images = await Promise.all(Array.from(imageFiles).map(fileToBase64));
        try {
            const response = await fetch('/api/generative-description', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, imageFiles: base64Images }),
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Failed to generate description.');
            }

            const data = await response.json();
            setDescription(data.description);
            setDescriptionLoading(false);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='p-8 border-2 border-black w-[700px] h-fit'>
            {/* PHASE 1 */}
            <h1 className='text-2xl font-extrabold'>Add Item to your list</h1>
            <div className={`flex-col gap-y-2`}>
                <input onChange={(e) => setTitle(e.target.value)} name='title' value={title} placeholder='Name of the product' title='Name of the product' className='w-[400px] h-10 mb-2 border px-2 focus:border-pink-300' />

                <h1 className='font-medium'>
                    Add product images <span className='text-red-500 font-bold text-xs'>Upload a minimum of 3 images</span>
                </h1>
                <div className='flex flex-wrap gap-2 mb-2'>
                    {imagePreviews.map((img, idx) => (
                        <div key={idx} className='h-20 w-20 rounded-sm bg-cover bg-center border border-pink-700' style={{ backgroundImage: `url(${img})` }} />
                    ))}
                    <div className='relative border-2 grid place-items-center border-pink-700 h-20 w-20 rounded-sm cursor-pointer bg-slate-100 hover:bg-slate-200'>
                        <BiSolidCameraPlus size={30} className='text-gray-400' />
                        <input
                            onChange={handleImageChange}
                            className='absolute cursor-pointer w-full h-full opacity-0'
                            accept="image/*"
                            type="file"
                            name='file'
                            multiple
                        />
                    </div>
                </div>

                <input className='px-2 w-[400px] border h-10 mb-2 focus:border-pink-300'  name='category' value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} placeholder='Category' />

                <input className='hidden' type="text" name='userId' value={user?.id ?? ""} onChange={() => { }} />
                
                <input onChange={(e) => setPrice(e.target.value)} name='price' type='number' value={price} placeholder='Add pricing' className='w-[400px] border h-10 mb-2 px-2 focus:border-pink-300' />

                <div className='flex items-center gap-x-8'>
                    {!descriptionLoading ? (
                        <textarea onChange={(e) => setDescription(e.target.value)} name='description' value={description} placeholder='Add Description' className='w-[400px] mb-2 focus:outline-pink-300 rounded-md p-2 border h-fit outline-none'></textarea>
                    ):(
                        <div className='w-[400px] bg-white flex items-center justify-center mb-2 border focus:outline-pink-300 rounded-md p-2 h-fit outline-1 outline-green-500'>
                            Loading
                        </div>
                    )}
                    <a onClick={()=>generateAutoDescription(title)}>
                        <button>Generate</button>
                    </a>
                </div>
            
            </div>
            <button type='submit'>Post</button>
        </form>
    );
};

export default ProductAddForm;