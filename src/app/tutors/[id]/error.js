"use client";

import Link from "next/link";
import React from "react";

const ErrorPage = ({ error, reset }) => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f5f7fb] px-4">
            <div className="w-[380px] rounded-[30px] bg-gradient-to-br from-[#e7f7ff] to-[#fdf2ff] p-8 shadow-xl border border-pink-100">

                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-fuchsia-500 to-cyan-500 bg-clip-text text-transparent items-center flex">
                    Oops!
                </h1>

                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                    Something Went Wrong
                </h2>

                <p className="mt-4 text-gray-500 font-medium leading-7">
                    An unexpected error occurred. Please try again or return
                    back to the homepage.
                </p>

                {/* Optional Error Message */}
                {error?.message && (
                    <p className="mt-3 text-sm text-red-500 bg-red-50 p-3 rounded-xl">
                        {error.message}
                    </p>
                )}

                <div className="mt-8 flex flex-col gap-4">
                    <button
                        onClick={() => reset()}
                        className="w-full py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-fuchsia-500 to-cyan-500 shadow-md hover:scale-[1.02] transition-all duration-300"
                    >
                        Try Again
                    </button>

                    <Link
                        href="/"
                        className="w-full text-center py-4 rounded-2xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition-all"
                    >
                        Back Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;