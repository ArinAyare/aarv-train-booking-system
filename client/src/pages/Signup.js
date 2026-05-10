
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Signup(){
const nav=useNavigate();
const [data,setData]=useState({});
const signup=async()=>{
await axios.post("http://localhost:5001/api/signup",data);
alert("Signup done");
nav("/");
};
return(<div style={{textAlign:"center",marginTop:50}}>
<h1>Signup</h1>
<input placeholder="Username" onChange={e=>setData({...data,username:e.target.value})}/><br/>
<input placeholder="Email" onChange={e=>setData({...data,email:e.target.value})}/><br/>
<input placeholder="Password" onChange={e=>setData({...data,password:e.target.value})}/><br/>
<button onClick={signup}>Signup</button>
</div>);
}
