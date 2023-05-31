// En la variable profiles cargamos un array de objetos, pues son los datos que estan contenidos en berlin.json

import profiles from '../data/berlin.json';
import '../styles/FaceBook.css';

export default function FaceBook() {
    const listProfiles = profiles.map(profile =>
      <li>
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
      return <ul> {listProfiles} </ul>
}