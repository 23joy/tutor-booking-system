import React from 'react';

const choose = [
    {
        title: "Easy Booking",
        des: "Book tutors instantly with a smooth and simple interface.",
    },
    {
        title: "Verified Tutors",
        des: "All tutors are verified to ensure quality education",
    },
    {
        title: "Flexible Scheduling",
        des: "Choose time slots that fit your daily routine",
    },
    {
        title: "Affordable Pricing",
        des: "Find tutors that match your budget esily."
    }
]

const ChooseMedi = () => {
    return (
        <div>
            <h2 className='font-boldbold text-2xl text-center mt-5'>Why Choose MediQueue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 m-10">
                {choose.map((choos, ind) => (
                    <div
                        key={ind}
                        className="group relative overflow-hidden rounded-[30px] bg-white/70 backdrop-blur-xl border border-white/30 p-8 text-center shadow-lg hover:shadow-fuchsia-200/40 hover:-translate-y-3 transition-all duration-500"
                    >
                        {/* Soft Gradient Blur */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-fuchsia-400/20 rounded-full blur-3xl group-hover:scale-125 transition duration-500"></div>

                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-cyan-400/20 rounded-full blur-3xl group-hover:scale-125 transition duration-500"></div>
                       

                        
                        <h2 className="relative z-10 text-2xl font-bold text-gray-800 mb-4 tracking-wide group-hover:text-fuchsia-600 transition duration-300">
                            {choos.title}
                        </h2>

                        
                        <p className="relative z-10 text-gray-600 leading-7 text-sm">
                            {choos.des}
                        </p>

                        
                        <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-fuchsia-500 to-cyan-500 rounded-full group-hover:w-3/4 group-hover:left-[12%] transition-all duration-500"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChooseMedi;