//Here we learned about Passing Data via Props
import 'bootstrap/dist/css/bootstrap.min.css';
const FruitItems = (props) =>{
  return(
  <ul className="list-group">
  {
  (props.newItems).map((item) => (<li key={item} className="list-group-item my-item">{item}</li>))}
</ul>
  );
}
export default FruitItems;