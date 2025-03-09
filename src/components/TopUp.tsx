import { useState } from 'react';

export default function TopUp() {
  const [userBalance, setUserBalance] = useState(20);
  const [amount, setAmount] = useState(0);

  const handleTopUp = () => {
    setUserBalance(userBalance + amount);
    alert(`Successfully topped up RM${amount}!`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-4">Top Up Your Balance</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        className="border p-2 w-full rounded"
        placeholder="Enter amount (RM)"
      />
      <button
        onClick={handleTopUp}
        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 mt-4"
      >
        Confirm Top-Up
      </button>
    </div>
  );
}