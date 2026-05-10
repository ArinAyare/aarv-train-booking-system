import { useEffect, useState } from "react";
import axios from "axios";

export default function My() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    axios
      .get(`http://localhost:5001/api/bookings/${user.email}`)
      .then((res) => setData(res.data));
  }, []);

  return (
    <div>
      <h2>My Bookings</h2>

      {data.map((b, i) => (
        <div key={i} className="card">
          <p>{b.train}</p>
          <img src={b.qr} alt="QR" />
        </div>
      ))}
    </div>
  );
}