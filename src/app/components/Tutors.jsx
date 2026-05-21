import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Tutors = ({ tutor }) => {
    console.log(tutor)
    return (
        <Card className="group relative overflow-hidden rounded-[28px] border border-white/30 bg-white/70 backdrop-blur-xl shadow-lg hover:shadow-fuchsia-200/40 transition-all duration-500">


            <div className="absolute -top-10 -right-10 w-40 h-40 bg-fuchsia-400/20 blur-3xl rounded-full group-hover:scale-125 transition duration-500"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full group-hover:scale-125 transition duration-500"></div>


            <div className="relative w-full aspect-square overflow-hidden">
                <Image
                    src={tutor?.imageUrl}
                    alt={tutor?.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                />
            </div>


            <div className="p-6 space-y-4 relative z-10">


                <div>
                    <h2 className="text-2xl font-bold text-gray-800 group-hover:text-fuchsia-600 transition">
                        {tutor?.name}
                    </h2>
                    <p className="text-sm text-gray-500">{tutor?.category}</p>
                </div>


                <div className="space-y-1 text-sm text-gray-600">
                    <p> {tutor?.location}</p>
                    <p> Session Start: {tutor?.startDate}</p>
                    <p className="font-semibold text-gray-800"> Fee: ${tutor?.fee}/hr</p>
                </div>


                <Link href={`/tutors/${tutor._id}`}>
                    <Button className="w-full rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white font-semibold shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300">
                        Book Session
                    </Button>
                </Link>

            </div>
        </Card>
    );
};

export default Tutors;