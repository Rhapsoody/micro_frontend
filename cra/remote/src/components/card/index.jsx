import React from 'react';

const Card = props => {
  const { userName } = props;

  return (
    <div>
      <span data-testid="welcome-message">Bienvenue {userName}</span>
    </div>
  );
}

export default Card;
