import React from 'react'
import IconPreview from 'public/images/icon-preview.svg';

import Modal from 'src/components/Modal';


const CoursePhoto = ({ data }) => {
    return (
        <div className='w-1/3 px-4' >
            <div className='item relative'>
                <figure className='item-image'>
                    <IconPreview/>
                    <img src={data} alt={data} className="object-cover h-46 w-full"/>
                </figure>
                <Modal content={(toggle) => <img src={data} alt={data}/>}>
                    {
                        (toggle) => <span onClick={toggle} className='link-wrapped'></span>
                    }
                </Modal>
            </div>
        </div>
    )
}

export default CoursePhoto

// (toggle) => <img src={data} alt={data} />