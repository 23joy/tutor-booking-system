'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { ProfileDropDown } from './ProfileDropDown';
import { useState, useEffect } from 'react'

const Navbar = () => {
    const { data: session } = authClient.useSession()
    
    const user = session?.user

    const [theme, setTheme] = useState('light')

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light'
        setTheme(savedTheme)
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [])

    const handleThemeChange = (newTheme) => {
        setTheme(newTheme)
        localStorage.setItem('theme', newTheme)

        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }

    const links = user ? <>
        <Link href={'/tutors'}>Tutors</Link>
        <Link href={'/addTuitors'}>AddTutors</Link>
        <Link href={'/myTutors'}>My Tutors</Link>
        <Link href={'/myBooking'}>My Booked Session</Link>
    </> : <>
        <Link href={'/'}>Home</Link>
        <Link href={'/tutors'}>Tutors</Link>
    </>

    return (
        <div className='flex justify-between items-center container mx-auto p-5 bg-gray-100 rounded-xl'>
            <div>
                <h2 className='font-extrabold text-3xl'>MediQueue</h2>
            </div>
            <div className=' gap-5 items-center hidden md:flex '>
                {links}
            </div>
            <div className='flex gap-2'>
                {user ? <>
                    <ProfileDropDown user={user}></ProfileDropDown>
                </> : <>
                    <Button variant='outline' className={'rounded-none'}>
                        <Link href={'/signIn'}>Login</Link>
                    </Button>
                    <Button variant='outline' className={'rounded-none'}>
                        <Link href={'/signUp'}>Register</Link>
                    </Button>
                </>}
            </div>

            <div className="relative flex items-center bg-zinc-200 dark:bg-zinc-800 p-1 rounded-full select-none">

                {/* স্লাইডিং ব্যাকগ্রাউন্ড গোল্লা (Active Indicator) */}
                <div
                    className={`absolute top-1 bottom-1 w-8 h-8 rounded-full bg-zinc-950 dark:bg-zinc-100 transition-all duration-300 ${theme === 'dark' ? 'left-1' : 'left-[calc(100%-2.25rem)]'
                        }`}
                />
                <button
                    onClick={() => handleThemeChange('dark')}
                    className={`p-1.5 rounded-full z-10 transition-colors duration-300 ${theme === 'dark' ? 'text-white' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    aria-label="Dark Mode"
                >

                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                        />
                    </svg>
                </button>

                <button
                    onClick={() => handleThemeChange('light')}
                    className={`p-1.5 rounded-full z-10 transition-colors duration-300 ${theme === 'light' ? 'text-zinc-900' : 'text-zinc-500 hover:text-zinc-400'
                        }`}
                    aria-label="Light Mode"
                >
                    {/* Sun Icon */}
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m2.828 9.9a5 5 0 117.072-7.072 5 5 0 01-7.072 7.072z"
                        />
                    </svg>
                </button>

            </div >
        </div>
    );
};

export default Navbar;