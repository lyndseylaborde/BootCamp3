import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import AddBuilding from './components/AddBuilding';
import RemoveBuilding from './components/RemoveBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import { useState } from "react";

function App({ data }) {
  //Update the variables to use the useState() hook
  const [filterText, setFilterText] = useState('');
  const [selectedBuilding, setSelectedBuilding] = useState(0); 
  const [newData, setNewData] = useState(data);

  function filterUpdate(value) {
    //Set the state of the filter text to the value being passed in
    setFilterText(value);
  }

  function selectedUpdate(id) {
    //Set the state of the selected building to the id being passed in
    setSelectedBuilding(id);
  }

  function dataUpdate(newData) {
    setNewData(newData);
  }

  return (
    <div className="bg">
      <div className="row">
        <h1>UF Directory App</h1>
      </div>
      {/* TODO: Edit Search component to include necessary props */}
      <Search 
        filterUpdate={filterUpdate}
      />
      <main>
        <div className="row">
          <div className="column1">
            <div className="tableWrapper">
              <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <td>
                    <b>Code Building</b>
                  </td>
                </tr>
              </thead>
              <tbody>
                {/* TODO: Edit BuildingList component to include necessary props */}
                <BuildingList
                  newData={newData}
                  filterText={filterText}
                  selectedUpdate={selectedUpdate}
                />
              </tbody>
              </table>
            </div>
          </div>
          <div className="column2">
            <div className="viewing">
              <ViewBuilding 
                selectedBuilding={selectedBuilding}
                newData={newData}
                dataUpdate={dataUpdate}
              />
              <RemoveBuilding
                selectedBuilding={selectedBuilding}
                newData={newData}
                dataUpdate={dataUpdate}
              />
            </div>
            <div className="adding">
              <AddBuilding 
                data={data}
                dataUpdate={dataUpdate}
              />
            </div>
          </div>
        </div>
        <Credit />
      </main>
    </div>
  );
}

export default App;