import React from 'react'

const AdminTopBar = () => {
    return (
        <>
            <div className='w-[85vw] h-[5vh] flex items-center justify-center shadow-md shadow-purple-500/50'>
                <div className='w-[95%] h-full flex justify-end items-center'>
                    <div className='font-bold text-purple-500'>
                        Admin
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminTopBar