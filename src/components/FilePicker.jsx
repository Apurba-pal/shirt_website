import React from 'react'
import CustomButton from './CustomButton'
const FilePicker = ({file,setFile, readfile}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input
        id = "file-upload"
        type="file"
        accept="image/*"
        onChange={(e)=>setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          upload image
        </label>
        <p className='mt-2 text-black text-xs truncate'>
          {file? file.name : 'No image selected'}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButton
        type="outline"
        title = "logo"
        handleClick={()=>readfile('logo')}
        customStyles='text-xs'
        />
        <CustomButton
        type="filled"
        title = "full"
        handleClick={()=>readfile('full')}
        customStyles='text-xs'
        />

      </div>
    </div>
  )
}

export default FilePicker
