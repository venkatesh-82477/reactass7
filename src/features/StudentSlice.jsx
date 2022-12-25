import { createSlice } from "@reduxjs/toolkit";
import Student from './../Data'


 const StudentSlice=createSlice({
    name:'students',
    initialState:Student,
    reducers:{
        AddStudent:(state,action)=>{
            state.push(action.payload);
        }, 
        StudentUpdated:(state,action)=>{
            const {id,Name,Age,Course,Batch}=action.payload;
            const existingStudent=state.find((user)=>user.id===id)
            if(existingStudent){
                existingStudent.Name=Name;
                existingStudent.Age=Age;
                existingStudent.Course=Course;
                existingStudent.Batch=Batch;
            }
        } 
    }
})

export default StudentSlice.reducer;
export const {AddStudent,StudentUpdated} = StudentSlice.actions;
