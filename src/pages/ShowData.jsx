import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function ShowData() {
    const data=useSelector((state)=>state.student)
    const navigate = useNavigate();
   // const nav=useNavigate();
    const AddNewStudent = () => {
        navigate('/Students/Add');
    }
    return (
    <>
    <div className='container'>
                <header className='head'>
                    <h3>Student Details</h3>
                    <button className='btn' onClick={AddNewStudent}>Add new student</button>
                </header>
                <center>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Course</th>
                            <th>Batch</th>
                            <th>Change</th>
                        </tr>
                        </thead>
                        <tbody>
                        {data.map((item,index)=>{
                 return(
                <tr key={index}>
                    <td className='td'>{item.Name}</td>
                    <td className='td'>{item.Age}</td>
                    <td className='td'>{item.Course}</td>
                    <td className='td'>{item.Batch}</td>
                    <td className='td' onClick={()=>{
                        const id=item.id;
                        navigate('/Students/Edit',{state:id});
                    }} style={{color:"blue",textDecoration:"underline",cursor:"pointer"}}>Edit</td>  
             </tr>
            )}
            )
            }     
              </tbody>
                </table>
                </center>
        </div>
            </>
            )}
            export default ShowData
