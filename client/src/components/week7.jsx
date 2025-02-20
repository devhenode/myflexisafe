import { createContext, useContext, useState } from 'react';

// Step 1: Create a Context
const CounterContext = createContext();

// Step 2: Create a Provider Component
const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

// Step 3: Create the Counter Component
const Counter = () => {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br />

      <p>Right here, I display my knowledge of Context API very simply and fast.</p>
    </div>
  );
};

// Step 4: Use the Provider and Counter in the App
const Apps = () => {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
};

export default Apps;