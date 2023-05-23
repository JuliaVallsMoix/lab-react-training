import './CreditCard.css';
import visaLogo from '../assets/images/visa.png';
import masterCardLogo from '../assets/images/MasterCard_Logo.svg.png';


export default function CreditCard({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div className="card" style={{ backgroundColor: `${bgColor}` }}>
          <div>
            <img className="card-logo" src={type === 'Master Card' ? masterCardLogo : visaLogo} />
          </div>
          <div>numbers</div>
          <div>
            <span>Expires 03/21</span>
            <span>N26</span>
          </div>
          <div>Mercedes Bouret</div>
        </div>
      );
}