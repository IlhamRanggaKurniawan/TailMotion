"use client"

import { Github, Menu, MoonStar, Sun, X } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const { setTheme, theme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const [showNavigation, setShowNavigation] = useState(false)
    const path = usePathname()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className='h-14 flex justify-between px-4 lg:h-16  lg:px-8'>
            <nav className='h-full flex items-center gap-6 text-zinc-500'>
                <Menu size={25} className='cursor-pointer md:hidden' onClick={() => setShowNavigation(true)} />
                <h1 className='text-xl font-bold text-white'>Tail Motion</h1>
                <Link href="/" className={` ${path === "/" ? "text-primary" : ""}`}>
                    Transform
                </Link>
                <Link href="/radius" className={` ${path === "/radius" ? "text-primary" : ""}`}>
                    Radius
                </Link>
                <Link href="/glassmorphism" className={` ${path === "/glassmorphism" ? "text-primary" : ""}`}>
                    Glassmorphism
                </Link>
            </nav>
            <div className='flex h-full items-center gap-3'>
                <Link href="https://github.com/IlhamRanggaKurniawan" target='_blank'>
                    <Github />
                </Link>
                {theme === "dark" ? (
                    <MoonStar size={25} className='cursor-pointer transition-all duration-300 hover:rotate-12' onClick={() => setTheme("light")} />
                ) : (
                    <Sun size={25} className='cursor-pointer transition-all duration-300 hover:rotate-90' onClick={() => setTheme("dark")} />
                )}
            </div>
            {/* navigation */}
            <div className={`fixed top-0 bg-secondary w-full h-screen transition-all duration-700 py-6 px-4  ${showNavigation ? "left-0" : "-left-[100%]"} md:hidden`}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Tail Motion</h1>
                    <X size={30} onClick={() => setShowNavigation(false)} />
                </div>
                <nav>
                    <Link href="/tes">
                        tes
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Header