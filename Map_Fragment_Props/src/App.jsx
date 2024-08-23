import React from "react";//Using for use <React.Fragments>..for short dont need to write this instead we can use <> </>
import FruitItems from './components/FruitItems.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Errorless from './components/Errorless.jsx';
import Css_Module from "./components/Css_Module.jsx";


function App() {
 let items=[ 'Mango','Apple','Guava','BlackBerry','Orange'];  let items2=[];

  //Conditional rendering
  // if(items !== 0){ <h3> No fruits found</h3>} else{return null};
  



  return (
    <React.Fragment>
      <center>
      <h1> Fruits </h1>
      {/* Logical Conditional rendering
      {items2.length ===0 && <h3> No items are in items2 bucket</h3>} */}
{/* 
      {/* <ul className="list-group">
        {//Ternary conditional rendering
        // (items!==0 ? items:null)
        items.map((item) => (<li key={item} className="list-group-item">{item}</li>))}
</ul> */}
<Errorless newItems2={items2}></Errorless>
<FruitItems key={items} newItems= {items}></FruitItems>
</center>
</React.Fragment>
  )
}

export default App
