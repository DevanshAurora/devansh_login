import {useState} from 'react';
import './App.css';
function Login({ setUser }){
    const[form,setForm]=useState({ username: "", password: ""});

    const handleLogin = (e)=>{
        e.preventDefault();
        if(form.username === "25112505" && form.password === "38037746"){
            setUser(form.username);
        }else{
            alert("Fill all fields");
        }
    };
    return(
        <div id="log">
        <form onSubmit={handleLogin}>
            <div id="log2">
                <br />
            <h2>Internet Login</h2>
            <br />
            <input type="text" placeholder="Username" id="dev" onChange={(e)=>setForm({...form,username:e.target.value})}/>
            <br/><br/>
            <input type="password" placeholder="Password" id="dev" onChange={(e)=>setForm({...form,password:e.target.value})}/>
            <br /><br />
            <button>Login</button>
            </div>
        </form>
        </div>
    );
}
export default Login;