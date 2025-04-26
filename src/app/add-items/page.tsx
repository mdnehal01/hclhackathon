import AddItemForm from '@/Components/AddItemForm'
import React from 'react'

const page = () => {
  return (
    <div className="h-screen w-screen grid place-items-center">
      <h1>Add Item to your list</h1>
      <AddItemForm/>
    </div>
  )
}

export default page