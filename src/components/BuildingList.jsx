function BuildingList( {newData, filterText, selectedUpdate} ) {
  //Apply names filter on buildingList
  const new_data = newData.filter(obj => (obj.name.toLowerCase().includes(filterText.toLowerCase())) 
                                   || (obj.code.toLowerCase().includes(filterText.toLowerCase())));
  const buildingList = new_data
    .map(directory => {
      return (
          // TODO: Create onClick listener to capture building id being selected
          <tr key={directory.id}
              onClick = {() => selectedUpdate(directory.id)}>
            <td>{directory.code} </td>
            <td> {directory.name} </td>
          </tr>
      );
    });

  return <>{buildingList}</>;
}

export default BuildingList;