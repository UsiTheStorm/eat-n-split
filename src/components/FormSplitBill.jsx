import { useState } from 'react';

import Button from './common/Button';

function FormSplitBill({ selectedFriend: { name } }) {
  const [bill, setBill] = useState('');
  const [userExpense, setUserExpense] = useState('');
  const [friendExpense, setFriendExpense] = useState('');
  const [whoPays, setWhoPays] = useState('user');

  return (
    <form action="" className="form-split-bill">
      <h2>Split a bill with {name}</h2>
      <label htmlFor="bill-value">💷 Bill value</label>
      <input
        type="number"
        id="bill-value"
        required
        placeholder="£100"
        min="0"
        max="1000000"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="user-expense">👨 Your expense</label>
      <input
        type="number"
        id="user-expense"
        required={whoPays === 'user'}
        disabled={whoPays === 'friend'}
        placeholder="£50"
        min="0"
        max={bill}
        value={userExpense}
        onChange={(e) => setUserExpense(Number(e.target.value))}
      />

      <label htmlFor="friend-expense">🙆 {name} expense</label>
      <input
        type="number"
        id="friend-expense"
        required={whoPays === 'friend'}
        disabled={whoPays === 'user'}
        placeholder="£50"
        min="0"
        max={bill}
        value={friendExpense}
        onChange={(e) => setFriendExpense(Number(e.target.value))}
      />

      <label htmlFor="who-pay">💳 Who is paying the bill</label>
      <select
        name="who-pay"
        id="who-pay"
        value={whoPays}
        onChange={(e) => setWhoPays(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{name}</option>
      </select>

      <Button>Split Bill</Button>
    </form>
  );
}

export default FormSplitBill;
