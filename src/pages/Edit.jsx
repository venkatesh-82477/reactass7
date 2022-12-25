import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom';
import { StudentUpdated } from '../features/StudentSlice';
import { useLocation } from 'react-router-dom';

function Edit() {
    const {state}=useLocation();
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const editId=state;
    const data=useSelector((state)=>state.student.filter((item)=>{return item.id===editId}).map((item)=>item))
    const sName=(data[0].Name);
    const sAge=(data[0].Age);
    const sCourse=(data[0].Course)
    const sBatch=(data[0].Batch)

    const [Name, setName] = useState(sName)
    const [Age, setAge] = useState(sAge)
    const [Course, setCourse] = useState(sCourse)
    const [Batch, setBatch] = useState(sBatch)
const cancelStudent=()=>{
    navigate("/Students")
}
    
const submitStudent = (e) => {
        e.preventDefault();
        if(Name && Age && Course && Batch){
        dispatch(StudentUpdated({
            id:editId, Name,Age,Course,Batch
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
                    <input type="text" name="Name" className='in'  value={Name} onChange={(e) => setName(e.target.value)} />
                    <input type="text" name="Age" className='in'  value={Age} onChange={(e) => setAge(e.target.value)}/>
                    <input type="text" name="Course" className='in' value={Course} onChange={(e) => setCourse(e.target.value)} />
                    <input type="text" name="Batch" className='in'  value={Batch} onChange={(e) => setBatch(e.target.value)}/>
                </div>
            </div>
            <div className='button'>
                <button className='btn1' onClick={cancelStudent} style={{backgroundColor:'blue',color:"white"}}>Cancel</button>
                <button className='btn1' onClick={submitStudent}>Update</button>
            </div>
        </>
    )
}

export default Edit