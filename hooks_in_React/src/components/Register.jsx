import React, { useEffect, useState } from "react";
function Register(){
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const [age,setAge]=useState(13);

console.log({email});
console.log({password});

function increaseAge(event){
  event.preventDefault();//Do not reload the screen on calling this function
  setAge(age + 1);
}

useEffect(() => {
  console.log("age: ",age);
} ,[age]); //Dependency array --> we provide this with state variables, or any variables that are cahnging in nature, hit a re-render
  return (
    <form>
      {age > 18 ?(
      <div>
        <input
        className="form-input"
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        >
        </input>
        <input
        className="form-input"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        >
        </input>
        </div>)
      :(<h1> You are not 18</h1>)}
      <button onClick={increaseAge}>Increase</button>
    </form>
  
    )
}


export default Register;