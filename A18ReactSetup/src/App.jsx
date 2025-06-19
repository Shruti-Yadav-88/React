import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Son from './pages/son';
import Daughter from './pages/daughter';


function App() {
  const[jagga, setJagga] = useState("Durbar marg");
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("techspire");
  // const[count, setCount] = useState(0);
  // // let name ="test";
  // const handleClick = () => {
  //   count<3 && setCount(count+1);
  // };
  return(
   <>
  
     <Son meroBhag={jagga}/>
     <Daughter meroProperty={jagga}/>
     
    </>
   
   );
};

export default App;
