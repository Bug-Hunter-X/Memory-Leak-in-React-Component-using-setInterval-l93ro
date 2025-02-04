```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a setInterval within useEffect without cleanup
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```