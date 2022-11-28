import React from 'react'

const OurInstructor = ({ data }) => {
    console.log('data', data)
    return (
        <section className='mt-10 w-2/3'>
            <h6 className='font-medium text-gray-900 text-2xl mb-4'>
                Our <span className='text-teal-500'>Instructor</span>
            </h6>
            <div className='flex items-center'>
                <img
                    src={data?.mentor?.profile ?? ""}
                    alt={data?.mentor?.name}
                    className='w-20 h-20 rounded-full overflow-hidden object-cover ' />
                <div className='ml-4'>
                    <h2 className='text-lg text-gray-900'>
                        {
                            data?.mentor?.name ?? "Mentor's name"
                        }
                    </h2>
                    <h3 className='text-sm text-gray-500'>
                        {
                            data?.mentor?.profession
                        }
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default OurInstructor