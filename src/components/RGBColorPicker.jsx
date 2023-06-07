import SingleColorPicker from './SingleColorPicker';

export default function RGBColorPicker() {
    return (
        <div>
            <SingleColorPicker color='r' />
            <SingleColorPicker color='g' />
            <SingleColorPicker color='b' />

        </div>
    )
}