import { useState } from "react";
import CafeInfo from "../CafeInfo/CafeInfo";
import css from "./App.module.css";
import type Votes from "../../types/votes";
function App() {
  const [vote, setVote] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  return (
    <div className={css.app}>
      <CafeInfo />
    </div>
  );
}

export default App;
