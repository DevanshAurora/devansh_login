function Dashboard({user,setUser}){
    return(
        <div>
            <h1>Welcome {user}</h1>
            <button onClick={()=> setUser(null)}>Logout</button>
        </div>
    )
}
export default Dashboard;