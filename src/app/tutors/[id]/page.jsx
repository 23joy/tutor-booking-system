import { EditModal } from '@/app/components/EditModal';
import { auth } from '@/lib/auth';
import { Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import React, { useId } from 'react';

const TutorIdDetails = async ({ params }) => {
    const { id } = await params;
    const {token}=await auth.api.getToken({
        headers:await headers()
    })
    //console.log(token);
    const res = await fetch(`${process.env.SURVER_URI}/tutors/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const tutor = await res.json();
    //console.log(tutor)
    return (
        <Card className="relative max-w-5xl mx-auto overflow-hidden rounded-[30px] border border-white/30 bg-white/70 backdrop-blur-xl shadow-xl">

            {/* Background glow */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-fuchsia-400/20 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-cyan-400/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 p-8">

                {/* Image */}
                <div className="w-full md:w-[40%]">
                    <div className="overflow-hidden rounded-3xl shadow-lg">
                        <Image
                            src={tutor?.imageUrl}
                            alt={tutor?.name}
                            width={500}
                            height={500}
                            className="w-full h-full object-cover hover:scale-110 transition duration-500"
                        />
                    </div>
                </div>
                <div className="flex-1 space-y-5">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800">
                            {tutor?.name}
                        </h2>
                        <p className="text-fuchsia-600 font-medium">
                            {tutor?.category}
                        </p>
                    </div>
                    <div>
                        <p><span className="font-semibold text-gray-800"> Experience:</span> {tutor?.experience}</p>
                        <p><span className="font-semibold text-gray-800"> Location:</span> {tutor?.location}</p>
                        <p><span className="font-semibold text-gray-800"> Mode:</span> {tutor?.mode}</p>
                        <p><span className="font-semibold text-gray-800"> Slots:</span> {tutor?.day_times}</p>
                        <p><span className="font-semibold text-gray-800"> Fee:</span> ${tutor?.fee}/hr</p>
                        <p><span className="font-semibold text-gray-800"> Remaining:</span> {tutor?.slot}</p>
                        <p className="sm:col-span-2">
                            <span className="font-semibold text-gray-800"> Start Date:</span> {tutor?.startDate}
                        </p>
                    </div>
                    <div className="pt-4">
                        <EditModal tutor={tutor} />
                    </div>

                </div>
            </div>

        </Card>
    );
};

export default TutorIdDetails;