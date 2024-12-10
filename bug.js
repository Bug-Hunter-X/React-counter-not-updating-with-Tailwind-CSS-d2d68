```javascript
//index.js
import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    //Simulate an API call
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold underline">Hello world</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default App; 
```