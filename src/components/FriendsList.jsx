import React from 'react';

function Friend({ friend: { name, image, balance } }) {
  let balanceMessage;

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
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balanceMessage}
      <button className="button">Select</button>
    </li>
  );
}

function FriendsList({ friends }) {
  return (
    <ul>
      {friends.map((fr) => {
        // console.log(fr);
        return <Friend key={fr.id} friend={fr} />;
      })}
    </ul>
  );
}

export default FriendsList;
