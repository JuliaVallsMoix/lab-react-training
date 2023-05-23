/**
 * 1. The content of the first div must be rgb(values from the props)
 * 2. el backgroundColor del primero hay que estabelcerlo en función de r,g,b
 * 3. El color hexadecimal, también hay que cambiarlo en funciónde r,g,b. Buscar una función que nos transforme de rgb a hexadecimal
 */


export default function BoxColor({ r, g, b}) {
    let hexColor = rgbToHex(r, g, b)
    return <div style={{ padding: '1rem', border: '1px solid black', margin: '1rem', backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
        <p>rgb({r} + {g} + {b})</p>
        <p> {hexColor} </p>
    </div>
}

function componentToHex(c) {
    console.log(c);
    var hex = c.toString(16);
    console.log(hex);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  