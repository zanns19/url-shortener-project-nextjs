"use client"
import React from 'react'
import { useState } from 'react'
const page = () => {
    const [url, seturl] = useState("")
    const [shortUrl, setshortUrl] = useState("")
    const [generated, setGenerated] = useState("")
    const handlebutton=() => {
      alert("Url added Successfully!")
      setGenerated(url,shortUrl)
    }
    
  return (
    <div>
      <div className="flex justify-center flex-col min-h-[35vh] w-md mx-auto bg-pink-100 my-3 p-9 rounded-md">
        <input onChange={e=>{seturl(e.target.value)}} value={url.name} name='url' type="text" placeholder='Enter Url' className='my-2 ring-amber-500 ring-1 rounded-md p-2'  />
        <input onChange={e=>{setshortUrl(e.target.value)}} value={shortUrl.name} name='shortUrl' type="text" placeholder='Enter ShortenerUrl' className='my-2 ring-amber-500 ring-1 rounded-md p-2'  />
        <button onClick={handlebutton} className='my-2 h-11 bg-blue-500 text-white cursor-pointer font-bold p-2 w-fit text-center mx-auto  rounded-2xl'>Generate Now</button>
      <div className="display flex flex-col">
        {generated && <>
        <span>Links:</span>
        <code>Your link is {`${url}/${shortUrl}`}</code>
        </>}
      </div>
      </div>
    </div>
  )
}

export default page
