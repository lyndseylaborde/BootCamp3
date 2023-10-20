import React from 'react';

function ViewBuilding({selectedBuilding, newData}) {
  // TODO: Find the corresponding data based off the selected building's id and display its data
  const building = newData.find((obj) => obj.id === selectedBuilding);

  if (building && building.coordinates) {
    return (
      <div>
        <p>
          {' '}
          <i>Click on a name to view more information</i>
        </p>
        <p><b>Code: </b>{building.code}</p>
        <p><b>Name: </b>{building.name}</p>
        <p><b>Coordinates: </b>{building.coordinates.latitude}, {building.coordinates.longitude}</p>
        <p><b>Address: </b>{building.address}</p>
      </div>
  );
  } else if (building) {
    return (
      <div>
        <p>
          {' '}
          <i>Click on a name to view more information</i>
        </p>
        <p><b>Code: </b>{building.code}</p>
        <p><b>Name: </b>{building.name}</p>
        <p><b>Coordinates:</b></p>
        <p><b>Address:</b> </p>
      </div>
    );
  } else {
    return (
        <div>
          <p>
            {' '}
            <i>Click on a name to view more information</i>
          </p>
        </div>
    );
  }
}

export default ViewBuilding;