
import {useEffect,useState} from "react";
import axios from "axios";

export default function Admin(){
const [data,setData]=useState([]);
useEffect(()=>{
axios.get("http://localhost:5001/api/admin").then(r=>setData(r.data));
},[]);
return(<div>
<h2>Admin Dashboard</h2>
{data.map((b,i)=>(<div key={i}>{b.train} - {b.user}</div>))}
</div>);
}
