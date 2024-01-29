import React from 'react'
import Header from '../Components/Header'
import { Outlet } from 'react-router-dom'

const MainLayOut = () => {
    return (
        <div>
            <Header />
            <main className='bg-[#1E1E1E]'>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayOut