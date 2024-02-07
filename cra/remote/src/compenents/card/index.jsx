const Card = props => {
  const { userName } = props;

  return (
    <div>
      <span>Bienvenue {userName}</span>
    </div>
  );
};

export default Card;
