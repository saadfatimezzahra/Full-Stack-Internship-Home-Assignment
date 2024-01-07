import React , {useState}from 'react'

const interface1 = () => {
    const [file , setFile] =useState() ;
    const handleFile=()=>{

    }
  return (
    <div>
      <div className='main-container'>
        <div>
            <input type='file'  className='file-filed'  value={file} onChange={handleFile}/>
        </div>

      </div>
    </div>
  )
}

export default interface1
