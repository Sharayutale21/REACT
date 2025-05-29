import './App.css'
import Title from "./Title.jsx";
import ProductTab from "./ProductTab.jsx";
import MsgBox from "./MsgBox.jsx";

function App() {
  return(
    <>
    <MsgBox userName="Sharayu" textColor="blue"/>
    <MsgBox userName="universe!!" textColor="pink"/>
    <ProductTab/>
 </>
 );
}

export default App
