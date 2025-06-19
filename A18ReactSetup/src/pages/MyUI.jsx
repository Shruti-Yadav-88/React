import React, { useState } from 'react'

const MyUI = () => {
      const[count, setCount] = useState(0);
      
      const handleClick = () => {
        count<3 && setCount(count+1);
      };
  return (
    <>
       {count}
         <button onClick={handleClick}>Click me</button>
        <p>This is react file</p>

    </>
      

  );
};

export default MyUI
