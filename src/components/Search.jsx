import { useRef } from "react";

function Search({ filterUpdate }) {
  //Update the input variable to use the useRef() hook
  const searchFilter = useRef(null);

  function handleChange() {
    //Update the value of the filter with the input from the textbox
    filterUpdate(searchFilter.current.value);
  }

  return (
    <form>
      <input 
        type="text"
        placeholder="Type to Filter"
        ref={searchFilter}
        onChange={handleChange}
      />
    </form>
  );
}
export default Search;