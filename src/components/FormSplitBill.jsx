import { useState } from 'react';

import Button from './common/Button';

function FormSplitBill({ selectedFriend: { name }, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [userExpense, setUserExpense] = useState(0);
  let friendExpense = bill ? bill - userExpense : '';
  const [whoPays, setWhoPays] = useState('user');

  function handleUserExpense(e) {
    setUserExpense(Number(e.target.value) > bill ? userExpense : Number(e.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (bill <= 0 || isNaN(bill)) {
      console.error('Please enter valid positive bill value');
      return;
    }

    if (userExpense === '' || isNaN(userExpense)) {
      console.error('Please enter valid your expense value (0 or positive)');
      return;
    }

    onSplitBill(whoPays === 'user' ? friendExpense : -userExpense);
  }

  return (
    <form action="" className="form-split-bill" onSubmit={handleSubmit}>
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
        placeholder="£50"
        min="0"
        max={bill}
        value={userExpense}
        onChange={handleUserExpense}
      />

      <label htmlFor="friend-expense">🙆 {name} expense</label>
      <input
        type="number"
        id="friend-expense"
        disabled
        placeholder="£50"
        min="0"
        max={bill}
        value={friendExpense}
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
