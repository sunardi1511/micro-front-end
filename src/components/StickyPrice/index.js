import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import formatThousand from 'src/helpers/formatThousand'

const StickyPrice = ({ footer, data }) => {
    const [isSticky, setIsSticky] = useState(() => true)

    useEffect(() => {
        const stickyOffsetTop = footer?.current?.getBoundingClientRect().top;

        const stickyMetaToggler = () => {
            setIsSticky(stickyOffsetTop >= window.pageYOffset + window.innerHeight)
        }

        window.addEventListener("scroll", stickyMetaToggler)
        return () => {
            window.removeEventListener("scroll", stickyMetaToggler)
        }
    }, [])

    return (
        <div>
            <CSSTransition in={isSticky} timeout={300} classNames='meta-price' unmountOnExit>
                <div className='meta-price w-full bg-white z-50 left-0 py-3'>
                    <div className='w-3/4 mx-auto'>
                        <div className='flex items-center'>
                            <div className='w-full'>
                                <h2 className='text-gray-600'>Nama Kelas</h2>
                                <h3 className='text-2xl text-gray-900'>{data?.name ?? "Nama Kelas"}</h3>
                            </div>
                            <h5 className='text-2xl text-teal-500 whitespace-nowrap mr-4'>
                                {data?.type === "free" ? "Free" : <span>Rp {formatThousand(data?.price ?? 0)}</span>}
                            </h5>
                            <a href={`${process.env.NEXT_PUBLIC_MEMBERPAGE_URL}/joined/${data?.id}`} target="_blank"
                                rel="noopener noreferrer" className='bg-orange-500 hover:bg-orange-400 transition-all
                                    duration-200 focus:outline-none shadow-inner text-white px-6 py-3 whitespace-nowrap'>
                                {data?.type === "free" ? "Enroll Now" : "Buy Now"}
                            </a>
                        </div>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

export default StickyPrice