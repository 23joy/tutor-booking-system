import { Avatar, Button, Card, Input, Label, TextField } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import Tutors from '../components/Tutors';

const TutorPage = async () => {
    const res = await fetch("http://localhost:7002/tutor")
    const tutors = await res.json();
    console.log(tutors)
    return (
        <div className=' max-w-[80%] mx-auto'>
            <h2 className='text-center font-extrabold text-3xl p-5'>All Tutors</h2>
            <div className='grid grid-cols-4 gap-6'>
                <TextField>
                    <Label>Search Tutor</Label>
                    <Input placeholder='search tutor by name...'></Input>
                </TextField>
                <TextField>
                    <Label>Start Date</Label>
                    <Input type='date'></Input>
                </TextField>
                <TextField>
                    <Label>End Date</Label>
                    <Input type='date'></Input>
                </TextField>
                <Button variant='outline' className={'py-2'}>Reset Filters</Button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    tutors.map(tutor =><Tutors key={tutor._id} tutor={tutor}></Tutors>)
                }
            </div>
        </div>
    );
};

export default TutorPage;