import React from 'react'
import { Slider } from '../ui/slider'

type SliderProps = {
  name: string,
  value: number,
  setValue: React.Dispatch<React.SetStateAction<number>>,
  unit: string,
  min: number,
  max: number,
  step: number,
  handler?: (param: number[]) => void;
}

const SliderInput: React.FC<SliderProps> = ({ name, value, setValue, unit, min, max, step, handler }) => {
  return (
    <div>
      <p className='font-medium'>{name}</p>
      <div className='flex justify-between items-center'>
        <Slider min={min} step={step} max={max} defaultValue={[value]} onValueChange={handler ? handler : value => setValue(value[0])} value={[value]} className=' z-30' />
        <p className='w-20 text-end'>{value}{unit}</p>
      </div>
    </div>
  )
}

export default SliderInput