import React from 'react'


const GlassmorphismPreview = ({ style }: { style?: React.CSSProperties }) => {
    return (
        <div className={`w-full shadow-xl rounded-lg flex items-center justify-center h-96 `} style={{
            backgroundImage: `url('/background.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <div style={style} className='border border-white w-96 h-64 rounded-lg'/>
        </div>
    )
}

export default GlassmorphismPreview