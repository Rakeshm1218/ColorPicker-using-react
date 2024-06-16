import React, { useState } from 'react';
import './colorpicker.css';

export const ColorPicker = () => {
    const [color, setColor] = useState("#000000");

    const handleColorChange = (e) => {
        setColor(e.target.value);
    };

    // const handleCopyColor = (e) => {
    //     navigator.clipboard.writeText(color).then(() => {
    //         e.target.textContent = "✅";
    //         setTimeout(() => {
    //                 e.target.textContent = "🗒️";
    //             }, 1000);
    //     }).catch(err => {
    //         console.error('Failed to copy: ', err);
    //     });
    // };

    return (
        <div className='container'>
            <h1>Color Picker</h1>
            <div className='color-display' style={{ backgroundColor: color }}></div>
            <div className='color-name'>
                <p>Color :</p><span>{color}</span>   
            </div>
            <label>Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
};

