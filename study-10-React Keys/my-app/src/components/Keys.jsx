import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", brand: "Dell", Qty: 1 },
  { id: 2, name: "Laptop", brand: "Hp", Qty: 1 },
  { id: 3, name: "Laptop", brand: "Lenovo", Qty: 1 },
];

const Keys = () => {
  const [items, setItems] = useState(products);

  const changeQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, Qty: item.Qty + 1 } : item
    );
    
    setItems(newItem);
  };
  console.log(items)
  return (
    <div>
      {items.map((prdt) => (
        <div className="bg-success text-white m-3 p-2" key={prdt.id}>

          <h1>{prdt.name}</h1>
          <h3>brand: {prdt.brand}</h3>
          <h4>Qty: {prdt.Qty}</h4>
          <button type="button" onClick={() => changeQty(prdt.id)}>+</button>
        </div>
      ))}
    </div>
  );
};

export default Keys;
