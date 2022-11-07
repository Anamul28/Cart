
/* import React, { useState } from 'react';


const AddingItem () {

    const initState = [
      { id: 1, name: "bread", quantity: 50, location: "cupboard" },
      { id: 2, name: "milk", quantity: 20, location: "fridge" },
      { id: 3, name: "water", quantity: 10, location: "fridge" }
    ];
    const [state, setState] = React.useState(initState);
  
   /* const handleUpdateQuantity = (productId: any, value: any) => {
      let newData = data;
      let index: number = newData.findIndex(
        (product: any) => product.id === productId
      ) */

      /*const handleUpdateQuantity = (productId: any, value: any) => {
        setData(prevData => prevData.map(el => {
            if(el.id === productId) {
                return {...el, quantity: value};
            }
            return el;
        }))
    }
  
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
            <td>{item.location}</td>
              <TextField
                  type="number"
                  defaultValue={1}
                  onChange={(event) =>
                      handleUpdateQuantity(item.id, event.target.value)
                  }
              />
            <td>{item.quantitiy}</td>
          </tr>
        ))}
      </table>
    );
  }
  
  ReactDOM.render(<MyTable />, document.getElementById("target"));
  



export default AddingItem; 