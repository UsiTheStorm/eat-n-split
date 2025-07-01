import { useState } from 'react';

import './App.css';
import InitialFriends from './data/users.json';

import FriendsList from './components/FriendsList';

const friends = InitialFriends;
// console.log(friends);

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
      </div>
    </div>
  );
}

export default App;
