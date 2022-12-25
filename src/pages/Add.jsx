import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { AddStudent } from '../features/StudentSlice';
import { useNavigate} from 'react-router-dom';



function Add() {
    const UserList=useSelector((state)=>state.student)
    console.log(UserList);
    const navigate=useNavigate();
    const navi=useNavigate()
    const cancelStudent=()=>{
        navi("/Students")
    }
    const dispatch=useDispatch();
    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Course, setCourse] = useState('')
    const [Batch, setBatch] = useState('')
   
const submitStudent = (e) => {
        e.preventDefault();
        if(Name && Age && Course && Batch){
            dispatch(AddStudent({
                id:UserList[UserList.length-1].id+1,
                Name,
                Age,
                Course,
                Batch,
    
            }))
            setName('');
            setAge('');
            setCourse('');
            setBatch('');
            navigate('/Students')
            
        }
        
    }
return (
        <>
        <div className='b'>
                <div className='head'>
                    <input type="text" name="Name" className='in' placeholder='Name' value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="Age" className='in' placeholder='Age' value={Age} onChange={(e) => setAge(e.target.value)}/>
                    <input type="text" name="Course" className='in' placeholder='Course' value={Course} onChange={(e) => setCourse(e.target.value)} />
                    <input type="text" name="Batch" className='in' placeholder='Batch' value={Batch} onChange={(e) => setBatch(e.target.value)}/>
                </div>
            </div>
            <div className='button'>
                <button className='btn1' onClick={cancelStudent} style={{backgroundColor:'grey',color:"white"}}>Cancel</button>
                <button className='btn1' onClick={submitStudent}>Submit</button>
            </div>
        </>
    )
}

export default Add