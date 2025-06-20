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

  const[shoes,setShoes]=useState("sneakers")

  return(
   <div>
  
     {/* <Son meroBhag={jagga}/>
     <Daughter meroProperty={jagga}/> */}
     <Son2 gift= {shoes}/>
     <Daughter2 upahar = {shoes}/>
     
    </div>
   
   );
};

export default App;
