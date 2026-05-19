import { EditModal } from '@/app/components/EditModal';
import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import React, { useId } from 'react';

const TutorIdDetails = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`${process.env.SURVER_URI}/tutors/${id}`)
    const tutor = await res.json();
    console.log(tutor)
    return (
        <Card className='max-w-[80%] mx-auto'>
            <div className='flex gap-4'>
                <div>
                    <Image src={tutor.imageUrl}
                        alt={tutor.name} width={400}
                        height={400}
                        className='rounded-2xl'
                    ></Image>
                </div>
                <div className='space-y-3'>
                    <div>
                        <h2 className='font-bold text-2xl'>{tutor.name}</h2>
                        <p className='text-gray-600'>{tutor.category}</p>
                    </div>
                    <div>
                        <h2><span className='font-semibold'>Institution & Experience: </span>{tutor.experience}</h2>
                        <h2><span className='font-semibold'>Location: </span>{tutor.location}</h2>
                        <h2><span className='font-semibold'>Mode: </span>{tutor.mode}</h2>
                        <h2><span className='font-semibold'>Available & time Slot: </span>{tutor.day_times}</h2>
                        <h2><span className='font-semibold'>Hourly Fee: </span>{tutor.fee}</h2>
                        <h2><span className='font-semibold'>Remaining Slots: </span>{tutor.slot}</h2>
                        <h2><span className='font-semibold'>Session Start Date: </span>{tutor.startDate}</h2>
                    </div>
                    <EditModal tutor={tutor}></EditModal>
                </div>
            </div>
        </Card>
    );
};

export default TutorIdDetails;