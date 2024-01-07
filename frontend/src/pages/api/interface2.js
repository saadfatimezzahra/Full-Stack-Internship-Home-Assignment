import React , {useNavigate} from 'react'

const interface2 = () => {
    const navigate = useNavigate()

    const handleClickProcess= async()=>{
        try{
            const response = await axios.post("http://localhost:8080/api" , )

        }catch(e){
            console.log(e)
        }
        navigate("/result")
    }
    const handleClickAddFile=()=>{

    }
    return (

        <div>
          <div className='main-container'>
            <div className='row'>
                <input type='submit'  className='button'  value="file"   onChange={handleClickAddFile}/>
                <input type='submit'  className='button'  value="process"   onChange={handleClickProcess}/>
            </div>
    
          </div>
        </div>
      )
}

export default interface2
