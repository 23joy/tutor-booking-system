import { Card } from '@heroui/react';
import React from 'react';


const works = [
    {
        no: "01",
        title: "Search Tutor",
        des: "Browse tutors by subject and availability."
    },
    {
        no: "02",
        title: "Select Slot",
        des: "Choose your Preferred date and time.",
    },
    {
        no: "03",
        title: "Book Session",
        des: "Confirm bookin with one click",
    },
    {
        no: "04",
        title: "Start Learning",
        des: "Join your session and begin Learnig"
    }
]

const MediQueueWorks = () => {
    return (
        <div>
            <h2 className='text-center font-bold m-5 text-2xl'>How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-10">
                {works.map((work, ind) => (
                    <div
                        key={ind}
                        className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-lg border border-fuchsia-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        {/* Gradient Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                        {/* Number */}
                        <div className="relative z-10 w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-bold text-xl shadow-lg mb-4 group-hover:scale-110 transition duration-300">
                            {work.no}
                        </div>

                        {/* Title */}
                        <h2 className="relative z-10 text-xl font-bold text-gray-800 mb-2 group-hover:text-fuchsia-600 transition duration-300">
                            {work.title}
                        </h2>

                        {/* Description */}
                        <p className="relative z-10 text-gray-600 leading-relaxed">
                            {work.des}
                        </p>

                        {/* Bottom Line Effect */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-fuchsia-500 to-purple-500 group-hover:w-full transition-all duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MediQueueWorks;