import {Link} from 'react-router-dom';

export default function SignIn() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-7'>
        Sign In
      </h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='Username' id='username' className='bg-slate-100 p-3
        rouded-lg'/>
        <input type="password" placeholder='Password' id='password' className='bg-slate-100 p-3
        rouded-lg'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg
         uppercase hover:opacity-95 disabled:opacity-80'>
            Sign In
        </button>
        <button className='bg-red-700 text-white p-3 rounded-lg
         uppercase hover:opacity-95 disabled:opacity-80'>
            GMAIL
        </button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Don't have an Account ?</p>
        <Link to='/sign-up'>
        <span className='text-blue-500'>Sing up</span>
        </Link>
      </div>
    </div>
  )
}
