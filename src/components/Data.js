import { useState, useEffect } from "react";

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
    lowAlarm: 'lowAlarm',
    highAlarm: 'highAlarm',
    aboveAlarm: 'aboveAlarm',
    belowAlarm: 'belowAlarm'
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
            <option value = "id"> ID </option>
            <option value = "name"> Unit Name </option>
            <option value = "census"> Unit Census </option>
            <option value = "capacity"> Unit Capacity </option>
            <option value = "highAlarm"> Unit High Alarm </option>
            <option value = "aboveAlarm">
              Unit Census Triggered High Alarm
            </option>
            <option value = "lowAlarm"> Low Alarm </option>
            <option value = "belowAlarm">
              Unit Census Triggered Low Alarm
            </option>
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
        <table className= "datatable">
        <tbody>
          <tr className= "datatable_titles">
            <th>
              ID
            </th>
            <th>
              Unit Name
            </th>
            <th>Capacity</th>
            <th>Census</th>
            <th> Unit High Alarm </th>
            <th>
             Unit Census Triggered High Alarm
            </th>
            <th> Unit Low Alarm </th>
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
                <td>
                  {!item.highAlarm ? "0" : item.highAlarm}
                </td>
                <td>
                {(item.census - item.highAlarm >= 0) ? `Unit census is ${item.census- item.highAlarm} above high Alarm` : ""}
                </td>
                <td>
                  {!item.lowAlarm ? "0" : item.lowAlarm}
                </td>
                <td>
                {(item.census - item.lowAlarm <= 0) ? `Unit census is ${item.lowAlarm- item.census} below low Alarm` : ""}
                </td>
              </tr>
          ))
        }
      </tbody>
    </table>
  </div>  
  </div>
    )
  }
  

}


