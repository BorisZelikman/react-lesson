import React, { useState } from 'react';

function Calendar(props) {
    const jsx=props.reservations.map(r=><div key={r.name+r.day+r.time} >
        {r.name} has reservation on {r.day} @ {r.time}
    </div>)
    return (
        
      <div id="calendar">
        <h2>Calendar</h2>
        {jsx}
        {/* your code here */}
      </div>
    )
  }
  
  function Register(props) {
    const jsx=props.reservations.map(r=><div key={r.name+r.day+r.time} >
        {r.day} @ {r.time}
    </div>)
    return (<div id="register">
        <h2>You cannot reserve during these times:</h2>
      {jsx}
    </div>)
  }
export default function SpotCheck3() {
    const [reservations, setReservations] = useState([
        { day: "Monday", time: 2000, name: "Earl" },
        { day: "Monday", time: 1845, name: "Ella" },
        { day: "Tuesday", time: 1930, name: "Linda" },
        { day: "Wednesday", time: 2015, name: "Anni" }
    ]);

    return (
        <div>
            <Calendar reservations={reservations} />
            <Register reservations={reservations} />
        </div>
    )
}
