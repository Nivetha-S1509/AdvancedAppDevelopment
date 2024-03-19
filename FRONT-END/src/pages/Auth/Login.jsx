// eslint-disable-next-line no-unused-vars
import React from 'react'
import party from '../../assets/img/party10.jpg'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const handleLogin = (e)=>{
        e.preventDefault()
        navigate('/user/dashboard')
    }
    return (
        <>
            <div className="w-screen h-screen bg-cover bg-no-repeat" style ={{backgroundImage: "url(" + party + ")"}}>

            <div className='p-[10vh] m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
                <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-orange-100' onSubmit={handleLogin}>
                    <input type="email" name="" id="" placeholder='Email' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="password" name="" id="" placeholder='Password' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-blue-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-blue-600 to-blue-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-blue-500/40'>Login</button>
                    
                    <div className="flex justify-between  ">
                    <Link to="/user/dashboard">
                        <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm mr-4 font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>User</button>
                    </Link>
                    <Link to="/admin/dashboard">
                        <button className='w[50%] bg-blue-500 text-white p-2 rounded-sm font-bold shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50'>Admin</button>
                    </Link>
                </div>

                    <p>New to PartyPro ? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/register')}> Sign up now ! </span></p>
                </form>
            
            </div>

            </div>
        </>
    )
}

export default Login