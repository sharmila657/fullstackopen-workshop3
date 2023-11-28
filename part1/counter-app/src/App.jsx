import { useState } from "react";
import Display from "./Display";
import MyButton from "./MyButton";

const App = () => {
  let [counter, setCounter] = useState(1);

  // setTimeout(() => {
  //   setCounter(counter + 1);
  //   console.log(counter);
  // }, 1000);
  const increaseByOne = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <Display counter={counter} />
      <MyButton someFunction={increaseByOne} text={"Increase by one"} />
    </div>
  );
};

export default App;
