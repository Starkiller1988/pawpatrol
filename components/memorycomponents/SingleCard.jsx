import "../memorycomponents/singlecard.css";

import logo from '../../images/PawPatrolLogo.png'

export default function SingleCard({ card, handleChoice, flipped }) {
  const handleClick = () => {
    handleChoice(card);
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          className="back"
          src={logo}
          alt="card-back"
          onClick={handleClick}
        />
      </div>
    </div>
  );
}
