import React, { useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
 
  return (
    <div>
      I am running {timer} on every 5 second. please {process.env.name}
    </div>
  );
 
};
export default App;
