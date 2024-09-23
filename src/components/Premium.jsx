import React from 'react'

const Premium = () => {
  return (
<div className="min-h-screen bg-white text-gray-800 p-8">
  {/* Header Section */}
  <div className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4">Explore Premium Plans</h1>
    <p className="text-lg">Upgrade to enjoy more benefits and better sound quality!</p>
  </div>

  {/* Card Section */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Premium Card 1 */}
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4">Individual Pack</h2>
      <p className="text-sm text-gray-600 mb-4">Best for individuals</p>
      <p className="text-4xl font-bold text-[#3AE176] mb-6">$9.99/month</p>
      <ul className="text-sm mb-6 space-y-2">
        <li>✓ Unlimited skips</li>
        <li>✓ Offline listening</li>
        <li>✓ No ads</li>
        <li>✓ High-quality audio</li>
      </ul>
      <button className="bg-[#3AE176] text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-500 transition duration-300 mt-auto">
        Get Premium
      </button>
    </div>

    {/* Premium Card 2 */}
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4">Duo Pack</h2>
      <p className="text-sm text-gray-600 mb-4">Best for two people</p>
      <p className="text-4xl font-bold text-[#3AE176] mb-6">$12.99/month</p>
      <ul className="text-sm mb-6 space-y-2">
        <li>✓ 2 Premium accounts</li>
        <li>✓ Duo Mix: shared playlists</li>
        <li>✓ No ads</li>
        <li>✓ High-quality audio</li>
      </ul>
      <button className="bg-[#3AE176] text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-500 transition duration-300 mt-auto">
        Get Duo
      </button>
    </div>

    {/* Premium Card 3 */}
    <div className="border border-gray-300 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center">
      <h2 className="text-2xl font-bold mb-4">Family Pack</h2>
      <p className="text-sm text-gray-600 mb-4">Best for families</p>
      <p className="text-4xl font-bold text-[#3AE176] mb-6">$15.99/month</p>
      <ul className="text-sm mb-6 space-y-2">
        <li>✓ 6 Premium accounts</li>
        <li>✓ Family Mix: shared playlists</li>
        <li>✓ No ads</li>
        <li>✓ High-quality audio</li>
      </ul>
      <button className="bg-[#3AE176] text-white font-bold py-2 px-4 rounded-lg w-full hover:bg-green-500 transition duration-300 mt-auto">
        Get Family
      </button>
    </div>

  </div>
</div>

  )
}

export default Premium