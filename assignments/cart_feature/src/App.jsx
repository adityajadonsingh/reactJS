import { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";

const data = [
  {
    imgUrl: "https://www.course-api.com/images/cart/phone-1.png",
    productName: "Samsung Galaxy S8",
    price: 399.99,
    quantity: 1,
  },
  {
    imgUrl: "https://www.course-api.com/images/cart/phone-2.png",
    productName: "google pixel",
    price: 499.99,
    quantity: 1,
  },
  {
    imgUrl: "https://www.course-api.com/images/cart/phone-3.png",
    productName: "Xiaomi Redmi Note 2",
    price: 699.99,
    quantity: 1,
  },
  {
    imgUrl: "https://www.course-api.com/images/cart/phone-4.png",
    productName: "google pixel",
    price: 599.99,
    quantity: 1,
  },
];

function App() {
  const filteredData = data.filter((items) => items.quantity >= 1);
  const [cart, setCart] = useState(filteredData);
  const [count, setCount] = useState(filteredData.length);
  const increaseQuantity = (idx) => {
    let updatedData = [...cart];
    updatedData[idx].quantity += 1;
    setCart(updatedData);
  }
  const decreaseQuantity = (idx, random = 1) => {
    let updatedData = [...cart];
    if(updatedData[idx].quantity <= 1 || idx){
      updatedData.splice(idx, 1);
      setCount(updatedData.length);
    }else{
      updatedData[idx].quantity -= 1;
    }
    setCart(updatedData);
  }
  const deleteAll = () => {
    setCart([]);
    setCount(0);
  }

  return (
    <>
      <header className="bg-[#000] py-6">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-3xl font-bold text-white">
            <h1>MyCart</h1>
          </div>
          <div className="icn text-white">

            <i className="text-3xl bi bi-cart-fill relative">
              <div className="count absolute">{count}</div>
            </i>
          </div>
        </div>
      </header>
      <section className="cart mt-14 mb-12">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-5xl uppercase text-white text-center">
            Your Bag
          </h2>
          <ul className="cart-list w-3/5 mt-10 flex flex-col gap-y-5">
            {
              cart.length !== 0 ? cart.map((items, idx) => 
                <li key={idx} className="item flex bg-[#000] py-6 rounded">
                  <div className="w-1/5 ">
                    <div className="img-box flex justify-center items-center">
                      <img
                        src={items.imgUrl}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="w-3/5 flex flex-col gap-y-2">
                    <span className="capatalize text-xl font-bold block text-white">
                    {items.productName}
                    </span>
                    <span className="text-lg block text-[#aaaaaa]">${items.price}</span>
                    <button onClick={() => decreaseQuantity(idx, 0)} className="bg-red-600 py-1 px-4 rounded text-white w-fit">
                      Remove
                    </button>
                  </div>
                  <div className="w-1/5 text-white flex flex-col items-center justify-between">
                    <div className="ctrl text-2xl">
                      <i onClick={() => increaseQuantity(idx)} className="bi bi-chevron-compact-up"></i>
                    </div>
                    <div className="text-2xl">
                      <span className="block">{items.quantity}</span>
                    </div>
                    <div className="ctrl text-2xl">
                      <i onClick={() => decreaseQuantity(idx)} className="bi bi-chevron-compact-down"></i>
                    </div>
                  </div>
                </li>
              )
            
            :
              <li className="text-3xl text-center text-white">is currently empty</li>
            }
          </ul>
          {
            cart.length !== 0 ? <div className="flex justify-center mt-10">
            <button onClick={() => deleteAll()} className="text-white bg-red-600 py-1 px-5 text-lg rounded">Clear All</button>
          </div>
          :
          <div></div>
          }
          
        </div>
      </section>
    </>
  );
}

export default App;
