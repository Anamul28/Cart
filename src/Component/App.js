import { useState } from 'react';
import data from './data';
import Main from './Component/Main';
import Basket from './Component/Basket';

function App() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
    return (
      <div className="App">
        <Header countCartItems={cartItems.length}></Header>
        <div className="row">
          <Main products={products} onAdd={onAdd}></Main>
          <Basket
            cartItems={cartItems}
            onAdd={onAdd}
            onRemove={onRemove}
          ></Basket>
        </div>
      </div>
    );
  }
  

  export default App;


  //const [count, setCount] = useState("");

  //const handleUpdateQuantity = (productsId: any, value: any) => {
   // setData(prevData => prevData.map(el => {
      //  if(el.id === productId) {
           // return {...el, quantity: value};
    //    }
       // return el;
   // }))
//  }

  // new code 

/*const handleUpdateQuantity = (productsId: any, value: any) => {
  setData(prevData => prevData.map(el => {
      if(el.id === productsId) {
          return {...el, quantity: value};
      }
      return el;
  }))
} // new code finish 

if (index !== -1) {
  newData[index].quantity = value
  setData(newData)
} else {
  console.log("Product not existing on table data...")
}
}

return (
<table>
  <tr key={"header"}>
    {Object.keys(state[0]).map((key) => (
      <th>{key}</th>
    ))}
  </tr>
  {state.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
        <TextField
            type="number"
            defaultValue={1}
            onChange={(event) =>
                handleUpdateQuantity(item.id, event.target.value)
            }
        />
      <td>{item.quantity}</td>
    </tr>
  ))}
</table>
); */
          
