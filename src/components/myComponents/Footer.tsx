import { Github } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-14 flex justify-between items-center bg-secondary px-4 z-20 md:fixed md:bottom-0'>
            <p>Made with ❤️ by: <strong>Ilham Rangga</strong></p>
            <Link href={"https://github.com/IlhamRanggaKurniawan"} target='_blank'>
                <Github />
            </Link>
        </div>
    )
}

export default Footer