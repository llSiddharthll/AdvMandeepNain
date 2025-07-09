import { useState } from 'react'

export default function GstCalculator() {
  const [amount, setAmount] = useState(0)
  const [gstRate, setGstRate] = useState(5)
  const [totalAmount, setTotalAmount] = useState(0)

  const handleCalculate = () => {
    const gstAmount = (amount * gstRate) / 100
    setTotalAmount(amount + gstAmount)
  }

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-blue-600">GST Calculator</h2>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Amount ($)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">GST Rate (%)</label>
        <select
          value={gstRate}
          onChange={(e) => setGstRate(parseFloat(e.target.value))}
          className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-blue-200"
        >
          <option value="5">5%</option>
          <option value="12">12%</option>
          <option value="18">18%</option>
          <option value="28">28%</option>
        </select>
      </div>

      <button
        onClick={handleCalculate}
        className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Calculate
      </button>

      {totalAmount > 0 && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md">
          <p className="text-lg font-semibold text-gray-800">
            Total Amount: ${totalAmount.toFixed(2)}
          </p>
          <p className="text-sm text-gray-600">
            GST ({gstRate}%): ${(totalAmount - amount).toFixed(2)}
          </p>
        </div>
      )}
    </div>
  )
}