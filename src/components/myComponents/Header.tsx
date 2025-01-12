"use client"

import {  Menu, MoonStar, Sun, X } from 'lucide-react'
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
                <h1 className='text-xl font-bold text-primary'>Tail Motion</h1>
                <Link href="/" className={`hidden ${path === "/" ? "text-primary" : ""} md:block`}>
                    Transform
                </Link>
                <Link href="/radius" className={`hidden ${path === "/radius" ? "text-primary" : ""} md:block`}>
                    Radius
                </Link>
                <Link href="/glassmorphism" className={`hidden ${path === "/glassmorphism" ? "text-primary" : ""} md:block`}>
                    Glassmorphism
                </Link>
                <Link href="/shadow" className={`hidden ${path === "/shadow" ? "text-primary" : ""} md:block`}>
                    Shadow
                </Link>
                <Link href="/motion" className={`hidden ${path === "/motion" ? "text-primary" : ""} md:block`}>
                    Motion
                </Link>
            </nav>
            <div className='flex h-full items-center'>
                {theme === "dark" ? (
                    <MoonStar size={25} className='cursor-pointer transition-all duration-300 hover:rotate-12' onClick={() => setTheme("light")} />
                ) : (
                    <Sun size={25} className='cursor-pointer transition-all duration-300 hover:rotate-90' onClick={() => setTheme("dark")} />
                )}
            </div>
            {/* navigation */}
            <div className={`fixed top-0 bg-secondary w-full h-screen transition-all duration-700 py-6 px-4 z-50  ${showNavigation ? "left-0" : "-left-[100%]"} md:hidden`}>
                <div className='flex justify-between items-center'>
                    <h1 className='text-2xl font-bold'>Tail Motion</h1>
                    <X size={30} onClick={() => setShowNavigation(false)} />
                </div>
                <nav className='flex flex-col mt-4 text-lg gap-2'>
                    <Link href="/" className={` ${path === "/" ? "text-primary" : ""}`} onClick={() => setShowNavigation(false)}>
                        Transform
                    </Link>
                    <Link href="/radius" className={` ${path === "/radius" ? "text-primary" : ""}`} onClick={() => setShowNavigation(false)}>
                        Radius
                    </Link>
                    <Link href="/glassmorphism" className={` ${path === "/glassmorphism" ? "text-primary" : ""}`} onClick={() => setShowNavigation(false)}>
                        Glassmorphism
                    </Link>
                    <Link href="/shadow" className={` ${path === "/shadow" ? "text-primary" : ""}`} onClick={() => setShowNavigation(false)}>
                        Shadow
                    </Link>
                    <Link href="/motion" className={` ${path === "/motion" ? "text-primary" : ""}`} onClick={() => setShowNavigation(false)}>
                        Motion
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export default Header