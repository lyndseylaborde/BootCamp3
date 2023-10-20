import React from 'react';
import { useRef } from "react";

function AddBuilding({newData, dataUpdate}) {

        const inputCode = useRef('');
        const inputName = useRef('');;
        const inputLatitude = useRef(0);
        const inputLongitude = useRef(0);
        const inputAddress = useRef('');

    function generateID() {
        const currID = Math.floor(Math.random() * 10) + 149; 
        console.log(currID);
        return(currID)
    }

    function addBuilding() {
        const newCode = inputCode.current.value;
        const newName = inputName.current.value;
        const newLatitude = inputLatitude.current.value;
        const newLongitude = inputLongitude.current.value;
        const newAddress = inputAddress.current.value
        const newBuilding = {
            id: generateID(),
            code: newCode,
            name: newName,
            coordinates: {
                latitude: newLatitude,
                longitude: newLongitude
            },
            address: newAddress
        };
        newData.push(newBuilding);
        dataUpdate(newData);
        return <>{newData}</>;
    }
    return (
        <div>
          <p>
            {' '}
            <i>Enter building details to add:</i>
          </p>
          <form>
            <p><b>Code (Required): </b></p>
            <input 
                className="addingInput" 
                type="text"
                ref={inputCode}
                >
            </input>
            <p><b>Name (Required): </b></p>
            <input 
                className="addingInput" 
                type="text"
                ref={inputName}
                >
            </input>
            <p><b>Latitude: </b></p>
            <input 
                className="addingInput"
                type="text"
                ref={inputLatitude}
                >
            </input>
            <p><b>Longitude: </b></p>
            <input 
                className="addingInput"
                type="text"
                ref={inputLongitude}
                >
            </input>
            <p><b>Address: </b></p>
            <input 
                className="addingInput"
                type="text"
                ref={inputAddress}
                >
            </input>
          </form>
          <button
            title="Add Building"
            color="#841584"
            onClick={() => addBuilding()}
          >Add Building
          </button>
        </div>
    );
}

export default AddBuilding;