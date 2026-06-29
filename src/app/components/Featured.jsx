import React from 'react';
import Feature from './Feature';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';

const Featured = async () => {
    
    const res = await fetch(`${process.env.SURVER_URI}/featured`)
    const featured = await res.json()
    //console.log(featured);
    return (
        <div className='max-w-[95%] mx-auto m-10'>
            <h2 className='text-2xl font-bold text-center m-10'>TUtors</h2>
            <div className='flex justify-between items-center'>
                <h2>Featured Tutors</h2>
                <Link href='/tutors' ><Button variant='outline' className={'p-3 text-fuchsia-500 rounded-none'}>All Tutors</Button></Link>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
                {
                    featured.map(feature => <Feature key={feature._id} feature={feature}></Feature>)
                }
            </div>
        </div>
    );
};

export default Featured;