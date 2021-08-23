import { useState, useEffect } from "react";

export default function Data(){

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  //search query set to empty string
  const [q, setQ] = useState("");

  //set search parameters, by name
  const [searchParam] = useState(['name']);


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

    /* here we create a function 
//     we filter the items
// use array property .some() to return an item even if other requirements didn't match
    */

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


  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded){
    return <>loading...</>;
  } else {
    return (
      //map over the elements and display as a table
      <div className = "wrapper">
        <div className = "search-wrapper">
          <label htmlFor = "search-form">
            <input
              type = "search"
              name = "search-form"
              id = "search-form"
              className = "search-input"
              placeholder = "Search for..."
              value = {q}

              //set the value of our useState q, anytime the user types in the search box

              onChange = {(e) => setQ(e.target.value)}
              />
          </label>
        </div>
      <table className= "datatable">
      <tbody>
        <tr className= "datatable_titles">
          <th>ID</th>
          <th>Name</th>
          <th>Capacity</th>
          <th>Census</th>
          <th>High Alarm</th>
          <th>Low Alarm</th>
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
                {item.highAlarm}
              </td>
              <td>
                {item.lowAlarm}
              </td>
            </tr>
        ))
      }
    </tbody>
  </table>
  </div>
    )
  }
  

}


