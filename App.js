import React, { useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div>maaaster ji, I am running {timer} on every 5 second</div>;
};
export default App;
