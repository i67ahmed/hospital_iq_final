## Hospital IQ » Front-end Engineer Exercise

The goal of this exercise is to:

  1.) Consume the output of a simple API
  2.) Use HTML, CSS and Javascript to render the data in a readable, usable manner
  3.) Add some sorting mechanism so the data can be sorted in different ways

## Solution formulation

Steps I thought of and executed for this exercise:

1.) Call the given api to retrieve the sample hospital data

  https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L21-L36


2.) Create a function so users can search through the retrieved data 

  https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L41-L52

3.) Create functionality for users to sort the data-table

  https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L55-L70

4.) Create render options, based on whether the data was loaded, loading, or an error happened

  https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L74-L78

5.) If the hospital data was loaded

  a.) Search bar is set up

     https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L96-L111 


  b.) Filter drop-down is set up

    https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L83-L95


  c.) Data table is rendered 

      https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L112-L157

  d.) Export data table to excel functionality is setup

    https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Data.js#L158-L164

6.) Allow users to toggle between dark and light view mode

  https://github.com/i67ahmed/hospital_iq_final/blob/da2a5131e289ab3d58cb8e579acae0d47a7e69a3/src/components/Header.js#L7-L22

## Libraries/Tools used

* Main dependency is the React library 
  * react, react-dom, react-html-table-to-excel
* Uses Jest for testing  
* Styling utilizes: Bootstrap & FontAwesome 

## How to Setup 

1.) git clone https://github.com/i67ahmed/hospital_iq_final.git

2.) npm install

3.) npm start or yarn start -> to run app (loads in http://localhost:3000)
  a.) npm test or yarn test  -> to see test-output

## Running tests

 * To run tests run 'yarn test' or 'npm test' on project root

 ## Decisions and Tradeoffs

 * I chose to use React for this project, because I'm currently learning React in my bootcamp course. I felt this would be a great opportunity for me to learn more about React and gain experience with the framework.

 * In using React I elected to use React Hooks. My thought process there was that this app only provides a single view and there is no state sharing between components. This means using something like Redux for a project of this scope would just be added complexity. React hooks allow you to use state and other React features without writing a class.
    * The hooks used in this project are the useState hook and the useEffect hook. 

 ## If it was a bigger project 
  
 * Since this was a coding challenge the scope was quite small. However, if this was a bigger project with a real client here are some things I would do differently. 

    1.) Spend more time designing and planning the UX/UI experience for the client's intended audience.

    2.) Set up pagination functionality for the data-table. 

    3.) Allow for users to export subsets of the data-table rather than the entirety of it. 

    4.) If the project called for more components that shared the hospital data from the API. I would transition this project to use Redux.




