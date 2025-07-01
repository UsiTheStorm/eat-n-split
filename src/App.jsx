import { useState } from 'react';

import './App.css';
import InitialFriends from './data/users.json';

import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/common/Button';
import FormSplitBill from './components/FormSplitBill';

const friends = InitialFriends;

function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        <FormAddFriend />
        <Button>Add Friend</Button>
      </div>
      <div>
        <FormSplitBill />
      </div>
    </div>
  );
}

export default App;
