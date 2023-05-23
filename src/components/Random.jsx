export default function Random({ min, max}) {
    let randomValue = Math.floor(Math.random() * max) + 1;
    return <div style={{ border: '1px solid black', margin: '1rem', textAlign: 'left' }}>
        <p style={{ marginLeft: '1rem' }}>
            Random value between {min} and {max} = {randomValue}
        </p>
    </div>
}