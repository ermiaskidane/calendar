import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Calendar from "react-calendar"
import { listEv } from "../store/actions/listActions";
import 'react-calendar/dist/Calendar.css';
import '../App.css';

const Home = ({history}) => {
  const [ date, setDate ] = useState(new Date());
  const [ todo, setToDo ] = useState("")
  const [ lists, setlists] = useState([])

  const dispatch = useDispatch();

  const listEvent = useSelector((state) => state.listEvent);
  const { loading, error, listInfo } = listEvent;

  useEffect(() => {
    if(listInfo) {
      setlists([listInfo])
    }

  }, [listInfo])

  const onChange = date => {
    setDate(date)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    let dateCh = date.toString()
    dispatch(listEv(todo, dateCh))
    // const data = {dateCh, todo}
    // console.log(data)
   
    // setlists([data])
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


export default Home;
