function App() {
  const [toDo, setToDo] = useState("");
  return (
    <div>
      <input type="text" placeholder="Write your todo..." />
    </div>
  );
}

export default App;
