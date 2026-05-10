import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function Booking() {
  const { name, price } = useParams();

  const [src, setSrc] = useState("");
  const [dst, setDst] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [cls, setCls] = useState("General");

  const mult = {
    General: 1,
    Economy: 1.2,
    Sleeper: 1.5,
    "AC Sleeper": 2,
  };

  const total = price * mult[cls];

  const confirm = async () => {
    const user = JSON.parse(localStorage.getItem("user"));

    await axios.post("http://localhost:5001/api/book", {
      user: user.email,
      train: name,
      source: src,
      destination: dst,
      date,
      time,
      class: cls,
      price: total,
    });

    alert("Ticket Booked!");
  };

  return (
    <div style={{ display:"flex", justifyContent:"center", marginTop:"40px" }}>
      <div className="card" style={{ width:"400px" }}>
        <h2>{name}</h2>

        <input placeholder="Source" onChange={(e)=>setSrc(e.target.value)} />
        <input placeholder="Destination" onChange={(e)=>setDst(e.target.value)} />
        <input type="date" onChange={(e)=>setDate(e.target.value)} />
        <input type="time" onChange={(e)=>setTime(e.target.value)} />

        <select onChange={(e)=>setCls(e.target.value)}>
          <option>General</option>
          <option>Economy</option>
          <option>Sleeper</option>
          <option>AC Sleeper</option>
        </select>

        <h3>Total ₹{total}</h3>

        <button onClick={confirm}>Confirm</button>
      </div>
    </div>
  );
}