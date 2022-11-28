import React from 'react'
import CoursePhoto from 'src/parts/Details/CoursePhoto'

const AboutCourse = ({ data }) => {
    return (
        <>
            <section>
                <h6 className='font-medium text-gray-900 text-2xl mb-4'>About
                    <span className='text-teal-500'>Course</span></h6>
                <p className='text-gray-600 text-lg leading-relaxed mb-3'>
                    {data?.description ?? "No Description Found"}
                </p>
            </section>

            <section className='mt-10'>
                <h6 className='font-medium text-gray-900 text-2xl mb-2'>
                    Course <span className='text-teal-500'>Photos</span>
                </h6>
                <div className='flex justify-start items-center -mx-4 mt-6'>
                    {
                        data?.images?.length > 0 ? (
                            data?.images?.map?.((photo, index) => (
                                <CoursePhoto data={photo.image} key={index} />
                            ))
                        ) : (<div className='w-full text-center py-12'> No Item Found</div>)
                    }

                </div>
            </section>
        </>
    )
}

export default AboutCourse