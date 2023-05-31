import '../styles/Greetings.css';

export default function Greetings({ lang, children }) {

    let greeting;

// Debeis actualizar la variable 'greeting' en función de la variable 'lang'
// Por ejemplo, si lang === 'de', la variable greeting debería tomar por valor 'Hallo'

if (lang === 'de') {
   greeting = 'Hallo';
} else if (lang === 'fr') {
    greeting = 'Bonjour';
} else if (lang === 'en') {
    greeting = 'Hello';
} else if (lang === 'es') {
    greeting = 'Hola';
}

    return (
        <div>
            <p className="gretting-p"> 
                {greeting} {children}
            </p>
        </div>
    )
}