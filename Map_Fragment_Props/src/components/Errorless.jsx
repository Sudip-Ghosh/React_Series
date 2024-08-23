import 'bootstrap/dist/css/bootstrap.min.css';
//Passing data via props
const Errorless =({newItems2}) =>{
  return(

newItems2.length===0 && <h3> No items are in items2 bucket</h3>
  )
}
export default Errorless;