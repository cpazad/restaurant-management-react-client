import Item from "../../components/Item";
import Items from "../../components/Items";
import { useEffect, useState } from "react"

const Popular = () => {
  const [foods, setFoods]= useState([])
  useEffect(()=>{
    fetch("foods.json")
    .then(res => res.json())
    .then(data => setFoods(data))
  },[])
  const sortedFoods = foods.sort((a, b) => b.orders - a.orders);
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto pb-5">
        {
          sortedFoods.slice(0,6).map(food => <Item key={food.id} food={food}></Item>)
        }
        {/* <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item> */}
      
      </div>
    </div>
  );
};

export default Popular;
