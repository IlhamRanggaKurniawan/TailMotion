import React from 'react'

const ShadowPreview = ({style} : {style?: React.CSSProperties}) => {
  return (
    <div className='bg-secondary w-full py-24 shadow-xl rounded-lg flex items-center justify-center'>
      <div className='bg-primary w-36 h-36 transition-transform duration-500 z-10 md:w-48 md:h-48 lg:w-56 lg:h-56' style={style}/>
    </div>
  )
}

export default ShadowPreview