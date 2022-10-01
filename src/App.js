import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Card from "./Card"
import Cart from "./Cart"
import { useState } from 'react';


function App() {
  const[products,setProducts]=useState(
  [
    {
      name:"iphoneC",
      price:10000,
      id:1,
    },
    {
      name:"iphoneX",
      price:54000,
      id:2,
    },
    {
      name:"iphonY",
      price:42000,
      id:3,
    },
    {
      name:"iphonZ",
      price:34000,
      id:4,
    },
    {
      name:"iphonA",
      price:15000,
      id:5,
    },
    {
      name:"iphonB",
      price:20000,
      id:6,
    }
  ])
  const [CartItems,setCartItems] = useState([])

  let addCart = (product)=>{
      setCartItems([...CartItems,product])
  }
  let removeCart =(product)=>{
    const indexNo = CartItems.findIndex(data => data.id===product.id )
    console.log(indexNo);
    CartItems.splice(indexNo,1);
    setCartItems([...CartItems])
  }
  return (
    <div className="container">
      <div className="row">

 {/* ---------------- left tab------------------ */}


        <div className='col-lg-8'>
          <div className='row'>
            {
            products.map((product)=>{
              return  <Card product={product} addCart={addCart} CartItems={CartItems}/> 
            })
            }
          </div>
        </div>


{/* --------------------right tab-------------------- */}
        <div className='col-lg-4'>
        <h3>Cart</h3>       
         <Cart CartItems={CartItems} removeCart={removeCart}></Cart>
        </div>
      
{/* ------------------------end---------------------   */}
        </div>
      </div>
  );
}

export default App;
