import React from 'react';
import { useState } from "react";

function RemoveBuilding({selectedBuilding, newData, dataUpdate}) {
    
    function deleteBuilding() {
        const building = newData.find((obj) => obj.id === selectedBuilding);
        const new_data = newData.filter(obj => (obj.id != building.id));
        const buildingList = new_data;
        dataUpdate(buildingList);
    }
  
    return (
        <button
            title="Remove Building"
            color="#841584"
            onClick={() => deleteBuilding()}
        >Remove Building
      </button>
    );
}

export default RemoveBuilding;