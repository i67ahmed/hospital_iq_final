import { useState, useEffect } from "react";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 

export default function Data(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //search query set to empty string
  const [q, setQ] = useState("");

  //set search parameters, by name
  const [searchParam] = useState(['name']);

  //set sort options
  const [sortType, setSortType] = useState(['name']);


//gets data from the api
  useEffect(() => {

    fetch('https://private-anon-803bf916a0-hospiqtest.apiary-mock.com/units')
      .then((res) => res.json())
      .then(
        (res) => {
          setIsLoaded(true);
          setItems(res);
        },
        //handling errors here instead of in catch statement
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
      }, []);

//here we create a function 
// we filter the items
// use array property .some() to return an item even if other requirements didn't match
function search(items) {
  return items.filter((item) => {
      return searchParam.some((newItem) => {
          return (
              item[newItem]
                  .toString()
                  .toLowerCase()
                  .indexOf(q.toLowerCase()) > -1
          );
      });
  });
}

//creates ability for users to sort the datatable based on whichever data-type they choose from the dropdown menu
useEffect ( () => { const sortArray = type => {
  const types = {
    id: 'id',
    name: 'name',
    capacity: 'capacity',
    census: 'census',
  };

  const sortProperty = types[type];
  const sorted = [...items].sort((a,b) => b[sortProperty] - a[sortProperty]);
  setItems(sorted); 
};

sortArray(sortType);
// eslint-disable-next-line
}, [sortType]);



  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded){
    return <>loading...</>;
  } else {

    return (
      //map over the elements and display as a table
      <div className = "wrapper">
        <div className = "sort-wrapper">
          <div> Sort Data by Column </div>
          <select onChange= {(e) => setSortType(e.target.value)}
          //sets the sort type as the option a user choses
          >
            <option value = "id"> Unit ID </option>
            <option value = "name"> Unit Name </option>
            <option value = "census"> Unit Census </option>
            <option value = "capacity"> Unit Capacity </option>
          </select>
        </div>
        <div className = "search-wrapper">
          <label htmlFor = "search-form">
            <input
              type = "search"
              name = "search-form"
              id = "search-form"
              className = "search-input"
              placeholder = "Search unit name..."
              value = {q}

              //set the value of our useState q, anytime the user types in the search box

              onChange = {(e) => setQ(e.target.value)}
              />
          </label>
        </div>
      <div className = "table-responsive">
        <table id= "Hospital_Data" className= "datatable">
        <tbody>
          <tr className= "datatable_titles">
            <th>
              Unit ID
            </th>
            <th>
              Unit Name
            </th>
            <th>
              Unit Capacity
            </th>
            <th> 
              Unit Census
            </th>
            <th>
             Unit Census Triggered High Alarm
            </th>
            <th>
            Unit Census Triggered Low Alarm
            </th>
          </tr>
        { search(items).map((item) => (
              <tr className= "datatable_entries" key={item.id}>
                <td>{item.id}</td>
                <td>
                  {item.name}
                </td>
                <td>
                  {item.capacity}
                </td>
                <td>
                  {item.census}
                </td>
                <td className = "alarm-checks">
                {((item.census - item.highAlarm >= 0) && !(item.census - item.lowAlarm <= 0)) ? <span> &#10004; </span> : ""}
                </td>
                <td className = "alarm-checks">
                {(item.census - item.lowAlarm <= 0) ? <span> &#10004; </span> : ""}
                </td>
              </tr>
          ))
        }
      </tbody>
    </table>
    <div>
      <ReactHTMLTableToExcel className = "btn btn-success"
      table = "Hospital_Data" 
      filename = "HospitalData_Excel"
      sheet = "Sheet"
      buttonText = "Export to excel" />
    </div>
  </div>  
  </div>
    )
  }
  

}


