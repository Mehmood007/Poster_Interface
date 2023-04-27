import React, { useState } from "react";
import "../App.css";
import Form from "./Form";
import Table from "./Record";

const TabMenu = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <ul className="tab-menu">
        <li className={activeTab === 1 ? "active" : ""} onClick={() => handleClick(1)}>
          New Post
        </li>
        <li className={activeTab === 2 ? "active" : ""} onClick={() => handleClick(2)}>
          Post Record
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 1 ? (
          <div>
            <Form />
          </div>
        ) : (
          <div>
            <Table />
          </div>
        )}
      </div>
    </div>
  );
};

export default TabMenu;
