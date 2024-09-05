import { useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='text-red-500 text-3xl'>shadcn ts</h1>
      <Button>Default</Button>
    </>
  );
}

export default App;
