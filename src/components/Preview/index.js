import React from 'react'
import RenderPreview from 'src/parts/Details/RenderPreview'

const Preview = ({data}) => {
  return (
    <section className='mt-10'>
        <h6 className='font-medium text-gray-900 text-2 mb-4'>
            You Will <span className='text-teal-500'>Learn</span>
        </h6>
        {
            data?.chapters?.length > 0 ? 
            <RenderPreview previews={data.chapters}></RenderPreview>
            : <div className='w-full text-center py-12'>No Chapter Found</div>
        } 
    </section>
  )
}

export default Preview