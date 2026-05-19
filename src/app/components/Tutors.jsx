import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const Tutors = ({ tutor }) => {
    console.log(tutor)
    return (
        <Card>
            <div className='relative w-full aspect-square max-w-[70vh] mx-auto'>
                <Image src={tutor?.imageUrl}
                    alt={tutor?.name}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='space-y-3'>
                <div>
                    <h2 className='font-bold text-xl'>{tutor?.name}</h2>
                    <p className='text-gray-700'>{tutor?.category}</p>
                </div>
                <div className='text-gray-700'>
                    <p>{tutor?.location}</p>
                    <p>Session Start Date : {tutor?.startDate}</p>
                    <p>Fee:${tutor?.fee}/hr</p>
                </div>
                <Button className={'w-full'}>Book Session</Button>
            </div>
        </Card>
    );
};

export default Tutors;