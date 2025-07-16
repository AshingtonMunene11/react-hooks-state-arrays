import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  {/*function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
    console.log(newFoodArray);
  }*/}
  

  const foodList = foods.map((food) => (
    <li key={food.id}  onClick= {() =>handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  const handleClick = (id) => {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }
  function handleLiClick(id) {
  const newFoodArray = foods.map((food) => {
    if (food.id === id) {
      return {
        ...food,
        heatLevel: food.heatLevel + 1,
      };
    } else {
      return food;
    }
  });
  setFoods(newFoodArray);
}

  return (
    <div>
      <button onClick={handleClick}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
};

export default SpicyFoodList;
