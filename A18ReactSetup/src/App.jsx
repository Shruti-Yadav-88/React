import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Son from './pages/son';
import Daughter from './pages/daughter';
import Son2 from './pages/Son2';
import Daughter2 from './pages/Daughter2';


function App() {
  const[jagga, setJagga] = useState("Durbar marg");
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("techspire");
  // const[count, setCount] = useState(0);
  // // let name ="test";
  // const handleClick = () => {
  //   count<3 && setCount(count+1);
  // };

  // const[shoes,setShoes]=useState("sneakers")
  const[products, setProducts]=useState([
    {id: 1, name: "shirt", price: 500 },
    {id: 2, name: "pant", price: 1000 },
    {id: 3, name: "shoes", price: 2000 },
    {id: 4, name: "watch", price: 3000 }, 
  ]);
  const [myProduct, setMyproduct]= useState("");

  return(
    
   <div >
    <div style={{display: "flex"}}>
    <input type="text"
    onChange={(e)=> setMyproduct(e.target.value)}/>
    <button
    onClick={()=>{
      // console.log("clicked")
      setProducts([...products,
        {id:new Date().getTime(), name: myProduct, price:200},])
    }}>Add this product</button>
    </div>
    {products.map((product, index)=>(
      <div
      style={{backgroundColor: "lavender", marginBottom: "10px", padding:"10px"}}
      
      key={product.id}>
         This is title:{product.name}
      </div>
  ))}
  
     {/* <Son meroBhag={jagga}/>
     <Daughter meroProperty={jagga}/> */}
     {/* <Son2 gift= {shoes}/>
     <Daughter2 upahar = {shoes}
     changeUpahar={setShoes}/> */}
     
    </div>
   
   );
};

export default App;
