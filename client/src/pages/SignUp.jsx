import { useState } from 'react';
import {Link} from 'react-router-dom';

export default function SignUp() {
    const [formData,setFormData]= useState({});
    const [error,setError] =useState(false);
    const [loading,setloading] =useState(false);
    const handleChange = (e)=>{
        setFormData({
            ...formData, [e.target.id]: e.target.value
        });
    };
    const handleSubmit = async (e) =>{
        e.prevent.Default();
        setloading(true);
        setError(false);
        try{
          const res = await fetch('',{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
          const data= await res.json();
          setLoading(false);
          if(data.success == false){
            setError(false);
            return;
          }
        } catch(error){
          setloading(false);
          setError(true);
        }
    };
    return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' 
        className='bg-slate-100 p-3
        rouded-lg'
        onChange={handleChange}/>
        <input type="email" placeholder='Email' id='email' 
        className='bg-slate-100 p-3
        rouded-lg'
        onChange={handleChange}
        />
        <input type="password" placeholder='Password' id='password' 
        className='bg-slate-100 p-3
        rouded-lg'
        onChange={handleChange}/>
        <button disabled={loading} className='bg-slate-700 text-white p-3 
        rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
            {loading ? 'Loading...':'Sign Up'}
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account ?</p>
        <Link to='/sign-in'>
        <span className='text-blue-500'>Sing in</span>
        </Link>
      </div>
      <p className='text-red-700 mt-5'>
        {error && 'Something went wrong'}
      </p>
    </div>
  )
}
