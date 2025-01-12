"use client"

import React, { useState } from 'react'
import Preview from './Preview'
import SliderInput from './SliderInput'
import TailwindSnippet from './TailwindSnippet'

const RadiusControl = () => {
    const [allBorderRadius, setAllBorderRadius] = useState(0)
    const [topLeftBorderRadius, setTopLeftBorderRadius] = useState(0)
    const [topRightBorderRadius, setTopRightBorderRadius] = useState(0)
    const [bottomRightBorderRadius, setBottomRightBorderRadius] = useState(0)
    const [bottomLeftBorderRadius, setBottomLeftBorderRadius] = useState(0)

    const allRadiusHandler = (value: number[]) => {
        setAllBorderRadius(value[0])
        setTopRightBorderRadius(value[0])
        setTopLeftBorderRadius(value[0])
        setBottomRightBorderRadius(value[0])
        setBottomLeftBorderRadius(value[0])
    }

    const tailwindCode = () => {
        if (topLeftBorderRadius === topRightBorderRadius && topRightBorderRadius === bottomRightBorderRadius && bottomRightBorderRadius === bottomLeftBorderRadius) {
            return `rounded-[${topLeftBorderRadius}]`
        } else if (topLeftBorderRadius === bottomRightBorderRadius && topRightBorderRadius === bottomLeftBorderRadius) {
            return `rounded-[${topLeftBorderRadius}px_${topRightBorderRadius}px]`
        } else {
            return `rounded-[${topLeftBorderRadius}px_${topRightBorderRadius}px_${bottomRightBorderRadius}px_${bottomLeftBorderRadius}px]`
        }
    }

    return (
        <div className='flex flex-col justify-between h-full gap-12 px-4 overflow-hidden mb-16 md:flex-row md:overflow-visible'>
            <Preview style={{ borderRadius: `${topLeftBorderRadius}px ${topRightBorderRadius}px ${bottomRightBorderRadius}px ${bottomLeftBorderRadius}px` }} />
            <div className='space-y-12 w-full'>
                <div className='bg-secondary shadow-xl rounded-md w-full p-4 space-y-2'>
                    <h2 className='text-lg font-bold'>Properties</h2>
                    <SliderInput name='All Corner Radius' setValue={setAllBorderRadius} handler={allRadiusHandler} value={allBorderRadius} unit='px' min={0} max={500} step={1} />
                    <SliderInput name='Top Left Radius' setValue={setTopLeftBorderRadius} value={topLeftBorderRadius} unit='px' min={0} max={500} step={1} />
                    <SliderInput name='Top Right Radius' setValue={setTopRightBorderRadius} value={topRightBorderRadius} unit='px' min={0} max={500} step={1} />
                    <SliderInput name='Bottom Right Radius' setValue={setBottomRightBorderRadius} value={bottomRightBorderRadius} unit='px' min={0} max={500} step={1} />
                    <SliderInput name='Bottom Left Radius' setValue={setBottomLeftBorderRadius} value={bottomLeftBorderRadius} unit='px' min={0} max={500} step={1} />
                </div>
                <TailwindSnippet code={tailwindCode()} />
            </div>
        </div>
    )
}

export default RadiusControl