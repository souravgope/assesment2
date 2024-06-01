import React from 'react';

function CatTable({ catData }) {
  console.log('CatData in CatTable:', catData);

  if (!catData || !catData.breeds || catData.breeds.length === 0) {
    return <p>No cat breed data available</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Breed</th>
            <th className="py-2 px-4 border-b">Image</th>
          </tr>
        </thead>
        
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">{catData.breeds[0]?.name || 'Unknown'}</td>
            <td className="py-2 px-4 border-b">{catData.breeds[0]?.description || 'No description available'}</td>
            <td className="py-2 px-4 border-b">
              <img src={catData.url} alt="Cat" className="w-16 h-16 object-cover" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CatTable;




