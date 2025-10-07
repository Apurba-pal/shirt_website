import React from 'react'
import CustomButton from './CustomButton'



const AIPicker = ({prompt,setPrompt,generatingImg, handleSubmit}) => {
  return (
    <div className='aipicker-container'>
        <textarea
        placeholder='Coming soon — paid API required'
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className='aipicker-textarea'
        />
        <div className='flex flex-wrap gap-3'>
            { generatingImg ? (
                <CustomButton
                type="outline"
                title="ask AI"
                customStyles="text-xs"
                />
            ): (
            <>
            <CustomButton
            type="outline"
            title="AI Logo"
            handleClick={()=>{handleSubmit('logo')}}
            customStyles="text-xs cursor-not-allowed opacity-50"
            disabled
            />
            <CustomButton
            type="filled"
            title="AI Full"
            handleClick={()=>{handleSubmit('full')}}
            customStyles="text-xs cursor-not-allowed opacity-50"
            disabled
            />
            </>)}
        </div>
    </div>
  )
}

export default AIPicker
