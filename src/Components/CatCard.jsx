import React from 'react';

function CatCard({ catData }) {
  console.log('CatData in CatCard:', catData);

  if (!catData || !catData.breeds || catData.breeds.length === 0) {
    return <p>No cat breed data available</p>;
  }

  return (
    <div className=" max-w-lg border p-4 rounded shadow-md ">
      <h2 className="text-xl font-bold mb-2">{catData.breeds[0]?.name || 'Unknown'}</h2>
      <img  src={catData.url} alt="Cat" className="w-full h-auto mb-2" />
      <p>{catData.breeds[0]?.description || 'No description available'}</p>
    </div>
  );
}

export default CatCard;
