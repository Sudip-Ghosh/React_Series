import React,{useMemo, useState} from "react";

const expensiveCalculation =(num) =>{
  console.log("calculating....");
  for (let i=0; i<=1000000000; i++){
    num += 1;
  }
  return num;
}
function FormRegister(){
  const [count , setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation =useMemo(()=>expensiveCalculation(count),[count]);
  //Memoization -- It is storing this inside a cache
  ////Remember, memoization helps avoid unnecessary recalculations, making your app more efficient. It’s like having a smart assistant who remembers answers to math problems so you don’t have to solve them repeatedly!

  const increment = () =>{
    setCount((c)=> c+1);
  };
  const addTodo = ()=>{
    setTodos((t)=>[...t,"Todo task"]);
  };

  return(
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo,index)=>{
          return <p key={index}>{todo}</p>
        })}
        <button onClick={addTodo}> Add todo</button>
      </div>
      <hr/>
      <div>
        Count :{count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  )
}
export default FormRegister;




// EXPLANATION: 

//My Todos Section:
// Inside the first <div>, there’s a list of todos.
// The todos state is an array that holds the todo items.
// When you click the “Add todo” button, it adds a new “Todo task” to the list.

// Expensive Calculation Section:
// Inside the second <div>, there’s information related to the count and an expensive calculation.
// The count state represents a numeric value.
// When you click the “+” button, it increments the count.
// The calculation variable uses the useMemo hook to memoize the result of the expensiveCalculation function.
// The expensiveCalculation function performs a computationally expensive operation (a loop that increments a number).
// The useMemo hook ensures that the calculation is only re-executed when the count changes.
