import { useEffect, useState } from 'react';
import './App.css';
import Card from './Component/Card/Card';
import Navbar from './Component/Navbar/Navbar';

function App() {
  const [guns, setGuns] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  console.log(guns);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "500px",
      width: "600px",
      overflow: "auto",
    },
  };

  const handleAddToCart = (gun) => {
    const newCart = [...cart, gun];
    setCart(newCart);
  };

  const toggleModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

  return (
    <div className="App">
       <Navbar></Navbar>
       <div className='card-container'>
        {guns.map((gun) => (
          <Card gun={gun} key={gun.id} handleAddToCart={handleAddToCart} />
        ))}
        </div>
    </div>
  );
}

export default App;
