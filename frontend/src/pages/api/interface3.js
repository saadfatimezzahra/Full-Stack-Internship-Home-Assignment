import React, { useEffect, useState } from 'react'

const interface3 = () => {

    const [employees , setEmployees] = useState([])
    const [averages , setAverages] = useState([])

    useEffect(()=>{
        async function getEmployeesAndAverages(){
            try{
                const response = await axios.get("http://localhost:8080/api") ;
                const response2= await axios.get("http://localhost:8080/api/average") ;
                console.log(response2.data)
                console.log(response.data) ;
                setAverages(response2.data)
                setEmployees(response.data)

            }catch(e){
                console.log(e)
            }

        }
        getEmployeesAndAverages()
    } , [])
  return (
    <div>
        <div className='main-container'>
      
        <table className='agents-table'>
            <thead>
          <tr>
            
            <th>Id</th>
            <th>Name</th>
            <th>Job</th>
            
            <th>Salary</th>
            
            
            
          </tr>
        </thead>
              <tbody>
                {employees.map((a , index)=>(
                  <tr key={index}>
                    <td>{a.id}</td>
                    <td>{a.name}</td>
                    <td>{a.job}</td>
                    <td>{a.salary}</td>
                    
                    
                  </tr>
                ))
                  
                }
              </tbody>
            </table>



            <table className='agents-table'>
            <thead>
          <tr>
            <th>Job</th>
            <th>Average</th>
          </tr>
        </thead>
              <tbody>
                {averages.map((a , index)=>(
                  <tr key={index}>
                    <td>{a.job}</td>
                    <td>{a.average}</td>
                    
                  </tr>
                ))
                  
                }
              </tbody>
            </table>

      </div>
      
    </div>
  )
}

export default interface3
