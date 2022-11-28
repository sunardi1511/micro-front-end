import React from 'react'
import Feature from 'src/parts/Details/Feature'

import NameTag from 'public/images/icon-nametag.svg'
import PlayBack from 'public/images/icon-playback.svg'
import Certificat from 'public/images/icon-certificat.svg'

const ClassInfo = ({ data }) => {
    return (
        <div className='absolute top-0 w-full transform -translate-y-1/2'>
            <div className='w-3/4 mx-auto'>
                <div className='flex justify-between'>
                    <Feature data={{
                        icon: <NameTag className='fill-teal-500' />,
                        meta: "STUDENT",
                        value: data?.totalStudent ?? 0
                    }} />
                    <Feature data={{
                        icon: <PlayBack className='fill-teal-500' />,
                        meta: "VIDEO",
                        value: data?.total_videos ?? 0
                    }} />
                    <Feature data={{
                        icon: <Certificat className='fill-teal-500' />,
                        meta: "Certificat",
                        value: data?.certificate === 1 ? "TERSEDIA" : "-"
                    }} />
                </div>
            </div>
        </div>
    )
}

export default ClassInfo