import React from 'react';
import Feature from './Feature';

const Featured =async () => {
    const res=await fetch(`${process.env.SURVER_URI}/featured`)
    const featured=await res.json()
    console.log(featured);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-10'>
            {
                featured.map(feature=><Feature key={feature._id} feature={feature}></Feature>)
            }
        </div>
    );
};

export default Featured;