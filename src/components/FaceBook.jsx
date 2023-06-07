// En la variable profiles cargamos un array de objetos, pues son los datos que estan contenidos en berlin.json

import { useState } from 'react';
import profiles from '../data/berlin.json';
import '../styles/FaceBook.css';

// 1. Transformar el array de profiles a un array de solo paises
// 2. Como hago para eliminar los repetidos de un array?
// 3. Console.log con el array final a ver si de verdad estan solo paises y no hay repetidos

const initialCountryList = profiles.map((profile) => profile.country);

console.log(initialCountryList);

const countryList = initialCountryList.filter((item, index) => initialCountryList.indexOf(item) === index);

console.log(countryList);

export default function FaceBook() {

    // Estado de la app: país seleccionado

    const [selectedCountry, setSelectedCountry] = useState('');

    const handleClick = (country) => {
        console.log(country);
        setSelectedCountry(country);
    }

    const buttons = <div> {countryList.map((country) => <button onClick={() => handleClick(country)} style={{ backgroundColor: selectedCountry === country ? 'turquoise' : '' }} className='btn'> {country} </button>)} </div>

    const listProfiles = profiles.map((profile) =>

        <li style={{ backgroundColor: selectedCountry === profile.country ? 'turquoise' : 'white' }} >
            <div className='img-container'>
                <img
                    src={profile.img}
                    alt={profile.firstName}
                />
            </div>
            <div className='profile-details'>
                <p><strong>First Name:</strong> {profile.firstName}</p>
                <p><strong>Last Name:</strong> {profile.lastName}</p>
                <p><strong>Country:</strong> {profile.country}</p>
                <p><strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}</p>
            </div>
        </li>

    );
    return (

        <div>
            <div className='btn-countries'>{buttons}</div>
            <ul> {listProfiles} </ul>
        </div>

    )
}