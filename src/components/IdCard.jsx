import '../styles/IdCard.css';

function getFormatedTime(date) {
    const day = date.toLocaleString('en-us', { weekday: 'short' });
    const month = date.toLocaleString('en-us', { month: 'short' });
    const dayOfBirth = date.getDate();
    const yearOfBirth = date.getFullYear();
  
    return `${day} ${month} ${dayOfBirth} ${yearOfBirth}`;
  }

  // Ens hem liat molt, es podia fer més fàcilment amb .toDateString, la data queda exàctament com ens la demanen a l'exercici. D'aquesta manera això d'aquí dalt no és necessari, simpelement hauríem de posar: fullDate = toDateString(birth);
  
  function IdCard({ firstName, lastName, gender, picture, height, birth }) {
    const fullDate = getFormatedTime(birth);
  
    return (
      <div className="card">
        <section className='img-container'><img className='card-image' src={picture} alt={'profile picture of ' + firstName} /></section>
        <section className='text-container'>
            <p><strong>First Name:</strong> {firstName}</p>
            <p><strong>Last Name:</strong> {lastName}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Birth:</strong> {fullDate}</p>
            <p><strong>Height:</strong> {height / 100 + 'm'}</p>
        </section>
      </div>
    );
  }
  
  export default IdCard;