import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto p-5 bg-gray-100 rounded-xl'>
            <div>
                <h2 className='font-extrabold text-3xl'>MediQueue</h2>
            </div>
            <div className='flex gap-2'>
                <Link href={'/home'}>Home</Link>
                <Link href={'/tutors'}>Tutors</Link>
                <Link href={'/addTuitors'}>AddTutors</Link>
            </div>
            <div className='flex gap-2'>
                <Button variant='outline' className={'rounded-none'}>
                    <Link href={'/signIn'}>Login</Link>
                </Button>
                <Button variant='outline' className={'rounded-none'}>
                   <Link href={'/signUp'}>Register</Link>
                   </Button>
            </div>
        </div>
    );
};

export default Navbar;