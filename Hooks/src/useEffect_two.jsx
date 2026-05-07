import  { useEffect, useState } from 'react';

    const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    console.log('Effect 1 - Updating document title');
    document.title = `You clicked ${count} times`;
  }, [count]); // Effect 1 re-runs when count changes

  useEffect(() => {
    console.log('Effect 2 - Logging name');
    console.log(`Name: ${name}`);
  }, [name]); // Effect 2 re-runs when name changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
    </div>
  );
};

