import React, { useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import '../App.css';

const Home = ({history}) => {
  const [ date, setDate ] = useState(new Date());
  const [ todo, setToDo ] = useState("")
  const [ lists, setlists] = useState([])

  const onChange = date => {
    setDate(date)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let dateCh = date.toString()
    const data = {dateCh, todo}
    console.log(data)
   
    setlists([todo, data])
}

console.log(lists)
  return (
    <div className="app">

      <h1>Calendar</h1>
      <Calendar onChange={onChange} value={date} />

      <p style={{margin: "5px 0"}}>{date.toString()}</p>

      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setToDo(e.target.value)} placeholder="enter an event" required/>
        <button type="submit" >button</button>
      </form>

    
      <h2 style={{textTransform: "capitalize" }}>Lists of Events </h2>
     {lists.length !== 0 ? (
       <ul>
         {lists.map((event) => (
          <React.Fragment key={event.todo}>
            <li>*{event.todo} <span style={{paddingLeft: "10px"}}>{event.dateCh}</span></li>
          </React.Fragment>
         ))}
       </ul>
     ): (
      <div> no Lists todos</div>
     )}

    </div>
  )
}
// function App() {
//   return (
//     <div className="App">
//       <h1>Weekly Calander</h1>
//       <div className="calander-table">
//         <div className="table-head">
//             <p>prev</p>
//             <p>today</p>
//             <p>next</p>
//         </div>
//         <table>
//           <thead>
//             <tr>
//               <th></th>
//               <th>sun</th>
//               <th>mon</th>
//               <th>tue</th>
//               <th>wed</th>
//               <th>thu</th>
//               <th>fri</th>
//               <th>sat</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="table-column">
//               <td className="table-rows">
//                 6
//                 <p>abc</p>
//                 <p>abc</p>
//                 <p>abc</p>
//                 <p>abc</p>
//                 <p>abc</p>
//                 <p>abc</p>
//                 <p>abc</p>
//               </td>
//               <td>9am</td>
//               <td>10am</td>
//               <td>11am</td>
//               <td>12am</td>
//               <td>1pm</td>
//               <td>2pm</td>
//               <td>3pm</td>
//               <td>4pm</td>
//               {/* <td>5pm</td>
//               <td>6pm</td> */}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

export default Home;
