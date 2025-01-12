"use client"

import React, { useRef, useState } from 'react'
import SliderInput from './SliderInput'
import { motion } from "motion/react"
import { RotateCcw } from 'lucide-react'
import { Switch } from '../ui/switch'

const MotionControl = () => {
    const [initialScale, setInitialScale] = useState(0)
    const [scale, setScale] = useState(1)
    const [delay, setDelay] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [initialRotate, setInitialRotate] = useState(0)
    const [borderRadius, setBorderRadius] = useState(0)
    const [drag, setDrag] = useState(false)
    const [repeat, setRepeat] = useState(false)
    const [motionKey, setMotionKey] = useState(Date.now())
    const constraintsRef = useRef<HTMLDivElement>(null)

    return (
        <div className='flex flex-col justify-between h-full gap-12 px-4 overflow-hidden mb-16 md:flex-row md:overflow-visible'>
            <motion.div ref={constraintsRef} className='bg-secondary w-full py-24 shadow-xl rounded-lg flex items-center justify-center'>
                <motion.div
                    key={motionKey}
                    className='bg-primary w-36 h-36 z-10 md:w-48 md:h-48 lg:w-56 lg:h-56'
                    initial={{
                        scale: initialScale,
                        rotate: initialRotate,
                    }}
                    animate={{
                        scale,
                        rotate,
                        borderRadius,
                        transition: {
                            repeatDelay: delay,
                            repeat: repeat ? Infinity : 0,
                            type: "spring",
                            stiffness: 400,
                            damping: 17
                        }
                    }}
                    drag={drag}
                    dragConstraints={constraintsRef}
                />
            </motion.div>
            <div className='space-y-12 w-full'>
                <div className='bg-secondary shadow-xl rounded-md w-full p-4 space-y-2'>
                    <h2 className='text-lg font-bold'>Animate Properties</h2>
                    <SliderInput name='Scale' setValue={setScale} value={scale} unit='' max={2} min={1} step={0.01} />
                    <SliderInput name='Delay' setValue={setDelay} value={delay} unit='sec' max={5} min={1} step={0.01} />
                    <SliderInput name='Rotate' setValue={setRotate} value={rotate} unit='deg' max={360} min={-360} step={1} />
                    <SliderInput name='Border Radius' setValue={setBorderRadius} value={borderRadius} unit='px' max={500} min={0} step={1} />
                    <div className='flex items-center justify-between'>
                        <p className='text-lg'>drag</p>
                        <Switch className='scale-125' onClick={() => setDrag(prev => !prev)} />
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-lg'>Repeat</p>
                        <Switch className='scale-125' onClick={() => setRepeat(prev => !prev)} />
                    </div>
                </div>
                <div className='bg-secondary shadow-xl rounded-md w-full p-4 space-y-2'>
                    <h2 className='text-lg font-bold'>Initial Properties</h2>
                    <SliderInput name='Initial Scale' setValue={setInitialScale} value={initialScale} unit='' max={5} min={0} step={0.01} />
                    <SliderInput name='Initial Rotate' setValue={setInitialRotate} value={initialRotate} unit='deg' max={360} min={-360} step={1} />

                    <div className='w-full flex justify-end'>
                        <button onClick={() => setMotionKey(Date.now())}>
                            <RotateCcw size={35} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotionControl