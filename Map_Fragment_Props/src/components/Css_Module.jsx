import CSS from "./Css_Module.module.css";
const Css_Module = ({newItems}) => {
  //CSS Module

  
    return(
      <ul className={`${CSS["my-span"]}`}>
      {
      newItems.map((item) => (<li key={item} className={`${CSS["my-css"]}`}>{item}</li>))}
    </ul>
      );

}

export default Css_Module;