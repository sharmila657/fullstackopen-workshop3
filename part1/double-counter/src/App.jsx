import { useState } from "react";
import MyButton from "./MyButton";
import History from "./History";

const App = () => {
  let initialState = {
    left: 0,
    right: 0,
  };
  let [clicks, setClicks] = useState(initialState);
  let [clickHistory, setHistory] = useState([]);
  let [totalClicks, setTotal] = useState(0);

  const increaseByOneLeft = () => {
    let newLeft = clicks.left + 1;
    let newState = {
      left: newLeft,
      right: clicks.right,
    };
    setClicks(newState);
    setHistory(clickHistory.concat("S"));
    setTotal(newLeft + clicks.right);
  };

  const increaseByOneRight = () => {
    let newRight = clicks.right + 1;
    setClicks({ left: clicks.left, right: newRight });
    let newLength = clickHistory.length + 1;
    setHistory([...clickHistory, "J"]);
    setTotal(newLength);
  };

  return (
    <div>
      {clicks.left}
      <MyButton someFunction={increaseByOneLeft} text={"left"} />
      {clicks.right}
      <MyButton someFunction={increaseByOneRight} text={"right"} />
      <History history={clickHistory} />
      <div>total clicks: {totalClicks}</div>
    </div>
  );
};

export default App;
