import React from 'react';
import { useNavigate } from 'react-router-dom';

const cardsData = [
  { id: 1, title: 'Car 1', description: 'Description for card 1', image: 'https://via.placeholder.com/150' },
  { id: 2, title: 'Car 2', description: 'Description for card 2', image: 'https://via.placeholder.com/150' },
  { id: 3, title: 'Car 3', description: 'Description for card 3', image: 'https://via.placeholder.com/150' },
  { id: 4, title: 'Car 4', description: 'Description for card 4', image: 'https://via.placeholder.com/150' },
  { id: 5, title: 'Car 5', description: 'Description for card 5', image: 'https://via.placeholder.com/150' },
  { id: 6, title: 'Car 6', description: 'Description for card 6', image: 'https://via.placeholder.com/150' },
  { id: 7, title: 'Car 7', description: 'Description for card 7', image: 'https://via.placeholder.com/150' },
  { id: 8, title: 'Car 8', description: 'Description for card 8', image: 'https://via.placeholder.com/150' },
  { id: 9, title: 'Car 9', description: 'Description for card 9', image: 'https://via.placeholder.com/150' },
  { id: 10, title: 'Car 10', description: 'Description for card 10', image: 'https://via.placeholder.com/150' },
];

const Cards = () => {
  const navigate = useNavigate();

  const send = (image, title, description) => {
    navigate("/CarDashBoard", { state: { image, title, description } });
  };

  return (
    <div className="cards-container">
      {cardsData.map(card => (
        <div key={card.id} className="card" onClick={() => send(card.image, card.title, card.description)}>
          <div className="card-image">
            <img src={card.image} alt={card.title} />
          </div>
          <div className="card-content">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
          <button className='btndelete'>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
