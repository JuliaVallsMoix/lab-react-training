import '../styles/SingleColorPicker.css';

export default function SingleColorPicker({ color, intensity, onColorChange }) {

    let bgColor = `rgb(${color === 'r' ? intensity : 0}, ${color === 'g' ? intensity :0}, ${color === 'b' ? intensity : 0})`;

    return (
        <div className='container-to-center'>
            <div className='single-color-container'>
                <div className='color-box' style={{backgroundColor: bgColor}}></div>
                <div className='input-box'>
                    <label htmlFor={color} > {color}: </label>
                    <input type="number" min={0} max={255} value={intensity} onChange={onColorChange} />
                </div>
            </div>
        </div>
    )
}