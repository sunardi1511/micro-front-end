import React from 'react'
import HappyStudent from 'src/parts/Details/HappyStudent'

const HappyStudentForm = ({data}) => {
  return (
    <section className='mt-10 w-6/12'>
        <h6 className='font-medium text-gray-900 text-2xl mb-4'>
            Happy <span className='text-teal-500'>Students</span>
        </h6>
        {data?.reviews?.map((testimonila, index) => {
          return <HappyStudent key={index} data={testimonila}/>
        })}
    </section>
  )
}

export default HappyStudentForm
