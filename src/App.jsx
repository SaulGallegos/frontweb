import { useState } from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';

function App() {
  const [isauth, setIsauth] = useState(false);
  const [content, setContent] = useState(<Register />);
  return (
    <>
      <Navbar isauth={isauth} setContent={setContent} setIsauth={setIsauth} />
      {content}
    </>
  );
}

export default App;
