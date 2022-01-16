import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const cardImages = [
  { src: "../images/ryder.png", matched: false },
  { src: "../images/chase.png", matched: false  },
  { src: "../images/marshal.png", matched: false  },
  { src: "../images/rubble.png", matched: false  },
  { src: "../images/rocky.png", matched: false  },
  { src: "../images/zuma.png", matched: false  },
  { src: "../images/everest.png", matched: false  },
  { src: "../images/tracker.png", matched: false  },
  { src: "../images/sky.png", matched: false  },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  // handle a Choice

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // compare 2 selected cards

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

console.log(cards)

  // reset choices & increase turn

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <>
      <div className="new-game">
        <button className="new_game" onClick={shuffleCards}>
          New Game
        </button>
      </div>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} 
          handleChoice={handleChoice} 
          flipped={card === choiceOne || card === choiceTwo || card.matched} 
          />
        ))}
      </div>
    </>
  );
}

export default MemoryGame;
