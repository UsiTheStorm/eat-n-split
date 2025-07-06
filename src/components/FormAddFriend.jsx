import { useState } from 'react';

import Button from './common/Button';

// Capitalize name
function capitalize(str) {
  return str
    .split(' ')
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())
    .join(' ');
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newFriendId = crypto.randomUUID();

    const finalImageUrl = image === '' ? `https://i.pravatar.cc/100?u=${newFriendId}` : image;

    const formatName = capitalize(name);

    const newFriend = {
      id: newFriendId,
      name: formatName,
      image: finalImageUrl,
      balance: 0,
    };

    onAddFriend(newFriend);

    setName('');
    setImage('');

    console.log(newFriend);
  }

  return (
    <form action="" className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="new-friend-name">🤼‍♀️ Friend name</label>
      <input
        type="text"
        placeholder="Tiffany"
        id="new-friend-name"
        required
        maxLength="16"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="new-friend-image">📷 Image URL</label>
      <input
        type="url"
        placeholder="https://..."
        id="new-friend-image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
