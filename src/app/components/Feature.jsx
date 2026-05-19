import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Feature = ({feature}) => {
    return (
        <Card>
            <div className='relative w-full aspect-square max-w-[70vh] mx-auto'>
                <Image src={feature?.imageUrl}
                    alt={feature?.name}
                    fill
                    className='object-cover'
                />
            </div>
            <div className='space-y-3'>
                <div>
                    <h2 className='font-bold text-xl'>{feature?.name}</h2>
                    <p className='text-gray-700'>{feature?.category}</p>
                </div>
                <div className='text-gray-700'>
                    <p>{feature?.location}</p>
                    <p>Session Start Date : {feature?.startDate}</p>
                    <p>Fee:${feature?.fee}/hr</p>
                </div>
                <Link href={`/tutorDetails/${feature._id}`}>
                    <Button className={'w-full'}>Book Session</Button>

                </Link>
            </div>
        </Card>
    );
};

export default Feature;