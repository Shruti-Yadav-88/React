import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Son from './pages/son';
import Daughter from './pages/daughter';
import Son2 from './pages/Son2';
import Daughter2 from './pages/Daughter2';
import Input from './pages/input/Input';
import Products from './pages/products/Products';
import Total from './pages/total/Total';


function App() {
  const [jagga, setJagga] = useState("Durbar marg");
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("techspire");
  // const[count, setCount] = useState(0);
  // // let name ="test";
  // const handleClick = () => {
  //   count<3 && setCount(count+1);
  // };

  // const[shoes,setShoes]=useState("sneakers")
  const [products, setProducts] = useState([
    { id: 1, name: "shirt", price: 500 },
    { id: 2, name: "pant", price: 1000 },
    { id: 3, name: "shoes", price: 2000 },
    { id: 4, name: "watch", price: 3000 },
  ]);
  const [myProduct, setMyproduct] = useState("");

  const deleteProduct = (id) => {
    setProducts(products.filter((product)=> product.id !== id));
    };
  return (

    <div >
      <Input 
      samaanthap={setProducts}
      setMyproduct={setMyproduct}
      mailelekhekoproduct={myProduct}
      saaman={products}
      />
      
      <Products saaman={products}
      saamanhata={deleteProduct}
      />

      <Total products={products}
      />


      {/* <Son meroBhag={jagga}/>
     <Daughter meroProperty={jagga}/> */}
      {/* <Son2 gift= {shoes}/>
     <Daughter2 upahar = {shoes}
     changeUpahar={setShoes}/> */}

    </div>

  );
};

export default App;
