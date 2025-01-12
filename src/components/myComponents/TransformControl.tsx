"use client"

import React, { useState } from 'react'
import Preview from './Preview'
import SliderInput from './SliderInput'
import TailwindSnippet from './TailwindSnippet'

const TransformControl = () => {
    const [rotate, setRotate] = useState<number>(0)
    const [scale, setScale] = useState<number>(1)
    const [translateX, setTranslateX] = useState<number>(0)
    const [translateY, setTranslateY] = useState<number>(0)

    const tailwindCode = (rotate === 0 ? "" : `rotate-[${rotate}deg] `) + (scale === 1 ? "" : `scale-[${scale}] `) + (translateX === 0 ? "" : `translate-x-[${translateX}px] `) + (translateY === 0 ? "" : `translate-y-[${translateY}px]`)

    return (
        <div className='flex flex-col justify-between h-full gap-12 px-4 overflow-hidden mb-16 md:flex-row md:overflow-visible'>
            <Preview style={{ transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale}) rotate(${rotate}deg)` }} />
            <div className='space-y-12 w-full'>
                <div className='bg-secondary shadow-xl rounded-md w-full p-4 space-y-2'>
                    <h2 className='text-lg font-bold'>Properties</h2>
                    <SliderInput name='Scale' setValue={setScale} value={scale} unit='' max={2} min={0} step={0.01} />
                    <SliderInput name='Translate X' setValue={setTranslateX} value={translateX} unit='px' min={-200} max={200} step={1} />
                    <SliderInput name='Translate Y' setValue={setTranslateY} value={translateY} unit='px' min={-200} max={200} step={1} />
                    <SliderInput name='Rotate' setValue={setRotate} value={rotate} unit='deg' min={0} max={360} step={1} />
                </div>
                <TailwindSnippet code={tailwindCode} />
            </div>
        </div>
    )
}

export default TransformControl