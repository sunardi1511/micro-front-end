import { useRef } from 'react'

import Head from 'next/head'

import courses from 'src/constants/api/courses'

import Footer from 'src/parts/Footer'

import BackgroundVideo from 'src/components/BackgroundVideo'
import ClassInfo from 'src/components/ClassInfo'
import StickyPrice from 'src/components/StickyPrice'
import AboutCourse from 'src/components/AboutCourse'
import Preview from 'src/components/Preview'
import OurInstructor from 'src/components/OurInstructor'
import HappyStudentForm from 'src/components/HappyStudentForm'

const DetailsCourse = ({ data }) => {
    console.log('data', data)

    const footer = useRef(null)

    return (
        <>
            <Head>
                <title>MICRO</title>
            </Head>

            <BackgroundVideo data={data} />
            <section className='container mx-auto pt-24 relative'>
                <ClassInfo data={data} />
                <StickyPrice footer={footer} data={data} />
                <div className='w-3/4 mx-auto mt-8'>
                    <div className='w-3/4'>
                        <AboutCourse data={data} />
                        <Preview data={data} />
                        <OurInstructor data={data}/>
                        <HappyStudentForm data={data}/>
                    </div>
                </div>
            </section>

            <section className='mt-24 bg-indigo-900 py-12' ref={footer}>
                <Footer />
            </section>
        </>
    )
}

DetailsCourse.getInitialProps = async (props) => {
    const { id } = props.query
    try {
        const data = await courses.details(id);
        return { data };
    } catch (error) {
        return error
    }
}


export default DetailsCourse