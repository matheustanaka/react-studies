import {useState} from "react";


const App = () => {
  const [message, setMessage] = useState('Hello world')


  const handleChangeMessage = () => {
    setMessage("olá mundo");
    
  }
  return (
    <>
      <h1>{message}</h1>
      <button onClick={handleChangeMessage}>Change Message</button>
    </>
  );
}

export default App;
