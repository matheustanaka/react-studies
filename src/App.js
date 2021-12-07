
const App = () => {
  const messages = ["hello world!", "olá mundo"];
  return (
    <div>
      {messages.map(message => <h1>{message}</h1>)}
    </div>
  );
}

export default App;
