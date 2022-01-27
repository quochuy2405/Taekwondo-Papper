import React, { useState } from 'react'
function AddImage({ id }: { id: string }) {
  const [URL, setURL] = useState(
    'https://images.unsplash.com/photo-1643129455708-ee61a0b87b6b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
  )

  const getURL = (e: any) => {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      setURL(`${reader.result}`)
    }

    reader.readAsDataURL(file)
  }
  const getfocus = (e: any) => {
    if (e.target) {
      e.target.classList.toggle('focusText')
    }
  }
  return (
    <label htmlFor={id} className="w-full h-fit mt-3  block" onClick={getfocus}>
      <img className="object-contain w-[50%] mx-auto scale-90" src={URL} alt="" />
      <input type="file" id={id} className="hidden" onChange={getURL} />
    </label>
  )
}

export default AddImage
