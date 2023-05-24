import './CreditCard.css';
import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/MasterCard_Logo.svg.png';


export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {

  let expirationYearTwoDigits = expirationYear % 100;

  // We could do it as well with expirationYear.toString().substring(2);

    return (
        <div className="card" style={{ backgroundColor: `${bgColor}`, color: `${color}` }} >
          <div>
            <img className="card-logo" src={type === 'Master Card' ? masterCardLogo : visaLogo} />
          </div>
          <div> {number} </div>
          <div>
            <span>Expires {expirationMonth}/{expirationYearTwoDigits} </span>
            <span> {bank} </span>
          </div>
          <p> {owner} </p>
        </div>
      );
}