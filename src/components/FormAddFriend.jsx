import React from 'react';

import Button from './common/Button';

function FormAddFriend() {
  return (
    <form action="" className="form-add-friend">
      <label htmlFor="new-friend-name">🤼‍♀️ Friend name</label>
      <input type="text" placeholder="Tiffany" id="new-friend-name" required />

      <label htmlFor="new-friend-image">📷 Image URL</label>
      <input type="url" placeholder="https://..." id="new-friend-image" required />

      <Button>Add</Button>
    </form>
  );
}

export default FormAddFriend;
