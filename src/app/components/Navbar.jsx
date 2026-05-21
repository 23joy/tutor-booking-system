'use client'
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { ProfileDropDown } from './ProfileDropDown';

const Navbar = () => {
    const { data: session, } = authClient.useSession()
    //console.log(session)
    const user = session?.user

    return (
        <div className='flex justify-between items-center container mx-auto p-5 bg-gray-100 rounded-xl'>
            <div>
                <h2 className='font-extrabold text-3xl'>MediQueue</h2>
            </div>
            <div className='flex gap-5'>
                {user ? <>
                    <Link href={'/tutors'}>Tutors</Link>
                    <Link href={'/addTuitors'}>AddTutors</Link>
                    <Link href={'/myTutors'}>My Tutors</Link>
                    <Link href={'/myBooking'}>My Booked Session</Link>
                </> : <>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/tutors'}>Tutors</Link>
                </>
                }
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
        </div>
    );
};

export default Navbar;