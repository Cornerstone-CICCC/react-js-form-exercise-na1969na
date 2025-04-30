import React, { useState } from "react";
import './App.css';

const App: React.FC = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState<string[]>([]);
  const [greeting, setGreeting] = useState("");

  const handleCheckboxChange = (food: string) => {
    setFavoriteFoods((prev) =>
      prev.includes(food)
        ? prev.filter((item) => item !== food)
        : [...prev, food]
    );
  };

  const handleDisplayUser = () => {
    if (firstname && lastname && age) {
      setGreeting(
        `Hello ${firstname} ${lastname}. You are ${age} years old and your favorite foods are: ${favoriteFoods.join(
          ", "
        )}.`
      );
    } else {
      setGreeting("Please fill out all fields.");
    }
  };

  const handleClear = () => {
    setFirstname("");
    setLastname("");
    setAge("");
    setFavoriteFoods([]);
    setGreeting("");
  };

  return (
    <div>
      <h1>User Form</h1>
      <form>
        <div>
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div>
          <label>Favorite Foods:</label>
          <div>
            <input
              type="checkbox"
              id="chicken"
              name="favoriteFoods"
              value="Chicken"
              checked={favoriteFoods.includes("Chicken")}
              onChange={() => handleCheckboxChange("Chicken")}
            />
            <label htmlFor="chicken">Chicken</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="beef"
              name="favoriteFoods"
              value="Beef"
              checked={favoriteFoods.includes("Beef")}
              onChange={() => handleCheckboxChange("Beef")}
            />
            <label htmlFor="beef">Beef</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="vegetables"
              name="favoriteFoods"
              value="Vegetables"
              checked={favoriteFoods.includes("Vegetables")}
              onChange={() => handleCheckboxChange("Vegetables")}
            />
            <label htmlFor="vegetables">Vegetables</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dessert"
              name="favoriteFoods"
              value="Dessert"
              checked={favoriteFoods.includes("Dessert")}
              onChange={() => handleCheckboxChange("Dessert")}
            />
            <label htmlFor="dessert">Dessert</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="pork"
              name="favoriteFoods"
              value="Pork"
              checked={favoriteFoods.includes("Pork")}
              onChange={() => handleCheckboxChange("Pork")}
            />
            <label htmlFor="pork">Pork</label>
          </div>
        </div>
      </form>

      <button type="button" onClick={handleDisplayUser}>
        Display User
      </button>
      <button type="button" onClick={handleClear}>
        Clear
      </button>

      <div className="output">{greeting && <p>{greeting}</p>}</div>
    </div>
  );
};

export default App;
