import React, { useState } from "react";
import "../App.css";
import Form from "./Form";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <ul className="tab-menu">
        <li className={activeTab === 1 ? "active" : ""} onClick={() => handleClick(1)}>
          Tab 1
        </li>
        <li className={activeTab === 2 ? "active" : ""} onClick={() => handleClick(2)}>
          Tab 2
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 1 ? (
          <div>
            <Form />
          </div>
        ) : (
          <div>
            <h2>Tab 2 content goes here</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;
