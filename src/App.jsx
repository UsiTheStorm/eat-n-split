import { useState } from 'react';

import './App.css';
import InitialFriends from './data/users.json';

import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/common/Button';
import FormSplitBill from './components/FormSplitBill';

const friends = InitialFriends;

function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleAddFriend() {
    setShowAddFriend((show) => !show);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList friends={friends} />
        {showAddFriend && <FormAddFriend />}
        <Button onBtnClick={handleAddFriend}>{showAddFriend ? 'Close' : 'Add Friend'}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

export default App;
