import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/neatflex.png'
import { UserAuth } from '../context/AuthContext'

const Navbar = () => {
    const { user, logOut } = UserAuth()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logOut()
            navigate('/login')
        } catch (error) {
            console.log(error.message)
        }
    }
    return (
        <div className='flex items-center justify-between p-4 z-[100] w-full absolute'>
            <Link to='/'>
                <img src={logo} alt="NEATFLEX" className='w-28 md:w-32 lg:w-48 sm:w-28' />
            </Link>
            {user?.email ?
                (
                    <div>
                        <Link to='/account'>
                            <button
                                className='text-white pb-2 pr-4'>
                                Account
                            </button>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className='bg-red-600 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-white'>
                            Logout
                        </button>
                    </div>
                )
                :
                (
                    <div>
                        <Link to='/login'>
                            <button
                                className='text-white pb-2 pr-4'>
                                Sign In
                            </button>
                        </Link>

                        <Link to='/signup'>
                            <button
                                className='bg-red-600 hover:bg-red-500 px-6 py-2 rounded cursor-pointer text-white'>
                                Sign Up
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export default Navbar