"use client"

import React, { useState } from 'react'
import TailwindSnippet from './TailwindSnippet'
import SliderInput from './SliderInput'
import GlassmorphismPreview from './GlassmorphismPreview'
import { Input } from '../ui/input'
import hexToRgba from '@/lib/hexToRgba'

const GlassmorphismControl = () => {
    const [opacity, setOpacity] = useState(0.5)
    const [blur, setBlur] = useState(10)
    const [saturation, setSaturation] = useState(1.8)
    const [contrast, setContrast] = useState(1)
    const [color, setColor] = useState("#D1D5DB")

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const getRgbaColor = () => {
        const {r,g,b} = hexToRgba(color)

        return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    return (
        <div className='flex flex-col justify-between h-full gap-12 px-4 overflow-hidden mb-16 md:flex-row md:overflow-visible'>
            <GlassmorphismPreview
                style={{
                    backdropFilter: `blur(${blur}px) saturate(${saturation}) contrast(${contrast})`,
                    backgroundColor: getRgbaColor(),
                    opacity: opacity,
                }}
            />
            <div className='space-y-12 w-full'>
                <div className='bg-secondary shadow-xl rounded-md w-full p-4 space-y-2'>
                    <h2 className='text-lg font-bold'>Properties</h2>
                    <SliderInput name='Opacity' setValue={setOpacity} value={opacity} unit='' max={1} min={0} step={0.01} />
                    <SliderInput name='Blur' setValue={setBlur} value={blur} unit='px' min={0} max={20} step={1} />
                    <SliderInput name='Saturation' setValue={setSaturation} value={saturation} unit='' min={0} max={2} step={0.01} />
                    <SliderInput name='Contrast' setValue={setContrast} value={contrast} unit='' min={0} max={2} step={0.01} />
                    <div className='space-y-2'>
                        <p>Shadow Color</p>
                        <div className='flex gap-4'>
                            <Input type='text' className="h-12 border-primary" value={color} onChange={handleColorChange} placeholder='Enter color HEX' />
                            <Input type='color' className='w-16 h-12 border-primary' value={color} onChange={handleColorChange} />
                        </div>
                    </div>
                </div>
                <TailwindSnippet code={""} />
            </div>
        </div>
    )
}

export default GlassmorphismControl