import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const navigate =useNavigate();
    const register =(event:React.FormEvent)=>{
        // kiem tra moi thong tin ng dung nhap ok het thi chuyen trang login
        // ngan chan vc submit cua form ko 
        event.preventDefault();

        navigate("/login")

       
    }
  return (
    <div>Register
        <form action ="" onSubmit={register}>
            <label htmlFor=''>email</label>
            <input type="text"></input>
            <label htmlFor=''>name</label>
            <input type="text"></input>
            <label htmlFor=''>passwword</label>
            <input type="text"></input>
            <label htmlFor=''>confirm passwword</label>
            <input type="text"></input>
               
            <input/>
            <button>register</button>
        </form>
    </div>
  )
}
