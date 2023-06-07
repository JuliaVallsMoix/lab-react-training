import '../styles/SingleColorPicker.css';
import { useState } from 'react';

export default function SingleColorPicker({ color }) {

    const [intensity, setIntensity] = useState(255);

    let bgColor;

    if (color === 'r') {
        bgColor = `rgb(${intensity}, 0, 0)`;
    } else if (color === 'g') {
        bgColor = `rgb(0, ${intensity}, 0)`;
    } else if (color === 'b') {
        bgColor = `rgb(0, 0, ${intensity})`;
    }

    return (
        <div className='container-to-center'>
            <div className='single-color-container'>
                <div className='color-box' style={{backgroundColor: bgColor}}></div>
                <div className='input-box'>
                    <label htmlFor={color} > {color}: </label>
                    <input type="number" min={0} max={255} value={intensity} onChange={(e) => setIntensity(e.target.value)} />
                </div>
            </div>
        </div>
    )
}