
import {useNavigate} from "react-router-dom";
export default function Home(){
const nav=useNavigate();
const trains=[
{name:"Vande Bharat",price:1500},
{name:"Rajdhani Express",price:1800},
{name:"Shatabdi Express",price:1600},
{name:"Garib Rath",price:1000}
];
return(<div>
<h1 style={{textAlign:"center"}}>Trains</h1>
{trains.map(t=>(
<div className="card">
<h2>{t.name}</h2>
<p>₹{t.price} - ₹{t.price*4}</p>
<button className="btn green" onClick={()=>nav("/booking/"+t.name+"/"+t.price)}>Book</button>
</div>
))}
</div>);
}
