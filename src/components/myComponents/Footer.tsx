import { Github, Instagram } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-14 flex justify-between items-center bg-secondary px-4 z-50 md:fixed md:bottom-0'>
            <p>Made with ❤️ by: <strong>Ilham Rangga</strong></p>
            <div className='flex gap-4'>
                <Link href={"https://www.instagram.com/ilham_rku"} target='_blank' className='hidden sm:block'>
                    <Instagram />
                </Link>
                <Link href={"https://github.com/IlhamRanggaKurniawan"} target='_blank'>
                    <Github />
                </Link>
            </div>
        </div>
    )
}

export default Footer