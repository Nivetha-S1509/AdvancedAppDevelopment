// eslint-disable-next-line no-unused-vars
import React from 'react'
import party from '../../assets/img/party10.jpg'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    return (
        <>
        
        <div className="w-screen h-screen bg-cover bg-no-repeat" style ={{backgroundImage: "url(" + party + ")"}}>
            <div className='p-[10vh] m-0 h-[90vh] w-screen flex justify-center items-center flex-col'>
            <form className='flex flex-col gap-5 bg-slate-50/80 h-5/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-orange-100'>

                    <input type="text" name="" id="" placeholder='Full Name' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-purple-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="number" name="" id="" placeholder='Age' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="text" name="" id="" placeholder='Mobile Number' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="email" name="" id="" placeholder='Email Address' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="password" name="" id="" placeholder='Create Password' className='bg-blue-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <button type="submit" className='w-[80%] bg-gradient-to-tr from-blue-600 to-blue-300 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-orange-500/40'>Register</button>
                    <p>Already a part of the PartyPro family ? <span className='text-blue-500 cursor-pointer font-bold' onClick={() => navigate('/login')}> Login ! </span></p>
                </form>
                </div>
            </div>
    
        </>
    )
}

export default Register