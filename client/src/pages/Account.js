export default function Account() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ display:"flex", justifyContent:"center", marginTop:"50px" }}>
      <div className="card" style={{ width:"350px", textAlign:"center" }}>
        <h2>Account</h2>

        <p>Name: {user?.username}</p>
        <p>Email: {user?.email}</p>
      </div>
    </div>
  );
}