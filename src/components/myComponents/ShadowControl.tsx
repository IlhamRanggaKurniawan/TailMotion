"use client"

import React, { useState } from 'react'
import SliderInput from './SliderInput'
import TailwindSnippet from './TailwindSnippet'
import { Input } from '../ui/input'
import hexToRgba from '@/lib/hexToRgba'
import { Switch } from '../ui/switch'
import ShadowPreview from './ShadowPreview'

const ShadowControl = () => {
    const [horizontal, setHorizontal] = useState(33)
    const [vertical, setVertical] = useState(20)
    const [blur, setBlur] = useState(20)
    const [spreadRadius, setSpreadRadius] = useState(5)
    const [opacity, setOpacity] = useState(0.5)
    const [color, setColor] = useState("#000000")
    const [inset, setInset] = useState(false)

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value)
    }

    const getRgbaColor = () => {
        const {r,g,b} = hexToRgba(color)

        return `rgba(${r}, ${g}, ${b}, ${opacity})`
    }

    const tailwindCode = `shadow-[${inset ? "inset_" : ""}${horizontal}px_${vertical}px_${blur}px_${spreadRadius}px_${getRgbaColor()}]`

    return (
        <div className='flex flex-col justify-between h-full gap-12 px-4 overflow-hidden mb-16 md:flex-row md:overflow-visible'>
            <ShadowPreview style={{boxShadow: `${horizontal}px ${vertical}px ${blur}px ${spreadRadius}px ${getRgbaColor()} ${inset ? "inset" : ""}`}}/>
            <div className='space-y-12 w-full'>
                <div className='bg-secondary shadow-xl rounded-md w-full p-4 space-y-3'>
                    <h2 className='text-lg font-bold'>Properties</h2>
                    <SliderInput name='Horizontal Shadow Lenght' setValue={setHorizontal} value={horizontal} unit='px' max={100} min={-100} step={1} />
                    <SliderInput name='Vertical Shadow Lenght' setValue={setVertical} value={vertical} unit='px' min={-100} max={100} step={1} />
                    <SliderInput name='Blur Radius' setValue={setBlur} value={blur} unit='px' min={0} max={200} step={1} />
                    <SliderInput name='Spread Radius' setValue={setSpreadRadius} value={spreadRadius} unit='px' min={-150} max={150} step={1} />
                    <SliderInput name='Shadow Opacity' setValue={setOpacity} value={opacity} unit='' min={0} max={1} step={0.01} />
                    <div className='space-y-2'>
                        <p>Shadow Color</p>
                        <div className='flex gap-4'>
                            <Input type='text' className="h-12 border-primary" value={color} onChange={handleColorChange} placeholder='Enter color HEX' />
                            <Input type='color' className='w-16 h-12 border-primary' value={color} onChange={handleColorChange} />
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <p className='text-lg'>Inset</p>
                        <Switch className='scale-125' onClick={() => setInset(prev => !prev)}/>
                    </div>
                </div>
                <TailwindSnippet code={tailwindCode} />
            </div>
        </div>
    )
}

export default ShadowControl