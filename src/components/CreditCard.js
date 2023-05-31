import './CreditCard.css';
import visaLogo from '../assets/images/visa.png';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <div className="logo--container">
        <img className="card--logo" />
      </div>
      <div className="card--numbers" style={{ color: color }}>
        **** **** **** {number.substring(12)}
      </div>
      <div className="card--expiration">
        <span style={{ color: color }}>{expirationMonth}</span>
        <span style={{ marginLeft: '1rem', color: color }}>{bank}</span>
      </div>
      <div style={{ color: color }}>{owner}</div>
    </div>
  );
}
export default CreditCard;
