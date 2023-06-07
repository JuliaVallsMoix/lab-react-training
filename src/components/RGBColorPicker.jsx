import SingleColorPicker from './SingleColorPicker';
import { useState } from 'react';

export default function RGBColorPicker() {

    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);

    return (
        <div>
            <SingleColorPicker color='r' intensity={red} onColorChange={(e) => setRed(e.target.value)} />
            <SingleColorPicker color='g' intensity={green} onColorChange={(e) => setGreen(e.target.value)} />
            <SingleColorPicker color='b' intensity={blue} onColorChange={(e) => setBlue(e.target.value)} />

            <div className='container-to-center'>
                <div className='single-color-container'>
                    <div className='color-box' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }} >
                    </div>
                    <p>
                        {`rgb(${red}, ${green}, ${blue})`}
                    </p>
                </div>
            </div>

        </div>
    )
}