import Link from "next/link";
import React from "react";

const NotfoundPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">
            <div className="w-[380px] rounded-[30px] bg-gradient-to-br from-[#e7f7ff] to-[#fdf2ff] p-8 shadow-lg border border-pink-100">
                
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    404
                </h1>

                <h2 className="mt-2 text-3xl font-bold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                    Page Not Found
                </h2>

                <p className="mt-3 text-gray-500 font-medium">
                    Sorry, the page you are looking for doesn’t exist.
                </p>

                <div className="mt-8">
                    <Link
                        href="/"
                        className="block w-full text-center py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-md hover:scale-[1.02] transition-all duration-300"
                    >
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotfoundPage;