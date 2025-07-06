import { useState } from 'react';

import Button from './common/Button';

function Friend({ friend, onSelection }) {
  const { name, image, balance } = friend;
  let balanceMessage;

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => setImageError(true);

  //  adding placeholder image in case of error
  const displayedImage =
    imageError || !image
      ? 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_640.png'
      : image;

  if (balance < 0) {
    balanceMessage = (
      <p className="red">
        You owe {name} £{Math.abs(balance)}
      </p>
    );
  } else if (balance > 0) {
    balanceMessage = (
      <p className="green">
        {name} owes you £{balance}
      </p>
    );
  } else {
    balanceMessage = <p>You and {name} are equal</p>;
  }
  return (
    <li>
      <img src={displayedImage} alt={name} onError={handleImageError} />
      <h3>{name}</h3>
      {balanceMessage}
      <Button onClick={() => onSelection(friend)}>Select</Button>
    </li>
  );
}

function FriendsList({ friends, onSelection }) {
  return (
    <ul>
      {friends.map((fr) => {
        return <Friend key={fr.id} friend={fr} onSelection={onSelection} />;
      })}
    </ul>
  );
}

export default FriendsList;
