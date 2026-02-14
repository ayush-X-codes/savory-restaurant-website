import React from "react";
import "./MenuCard.css";
import { menuData } from "../../data/menuData";

const MenuCard = () => {
  const categories = ["Appetizers", "Mains", "Desserts"];
  return (
    <div className="menu-wrapper">
      <h1 className="title">Our Menu</h1>
      {categories.map((cat) => {
        const items = menuData.filter((items) => items.category === cat);
        return (
          <section key={cat} className="category-section">
            <h2 className="cat-name">
                {cat}
            <div className="heading-line"></div>
            </h2>
            <div className="menu-grid">
              {items.map((item) => (
                <div key={item.id} className="menu-card">
                  <div className="card-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="card-content">
                    <p className="item-name">{item.name}</p>
                    <p className="item-description">{item.description}</p>
                    <p className="item-price">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default MenuCard;
