import React from 'react';

import Button from './common/Button';

function FormSplitBill({ selectedFriend: { name } }) {
  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label htmlFor="bill-value">💷 Bill value</label>
      <input type="number" placeholder="" id="bill-value" required placeholder="£100" />

      <label htmlFor="your-expense">👨 Your expense</label>
      <input type="number" placeholder="" id="your-expense" required placeholder="£50" />

      <label htmlFor="friend-expense">🙆 {name} expense</label>
      <input type="number" placeholder="" id="friend-expense" disabled placeholder="£50" />

      <label htmlFor="who-pay">💳 Who is paying the bill</label>
      <select name="who-pay" id="who-pay">
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
