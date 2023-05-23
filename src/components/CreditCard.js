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
  Color,
}) {
  return (
    <div className="card" style={{ backgroundColor: '#eeeeee' }}>
      <div className="logo--container">
        <img className="card--logo" />
      </div>
      <div className="card--numbers">1234567789</div>
      <div className="card--expiration">
        <span>expire</span>
        <span style={{ marginLeft: '1rem' }}>N26</span>
      </div>
      <div>owneer</div>
    </div>
  );
}
export default CreditCard;
