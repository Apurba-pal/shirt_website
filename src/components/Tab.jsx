import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";
const Tab = ({ tab, isFilterTab, IsActiveTab, handleClick }) => {
  const snap = useSnapshot(state);
  const activeStyles = isFilterTab && IsActiveTab ? {backgroundcolor:snap.color, opacity:0.5}:{backgroundcolor:"transparent", opacity:1}

  return <div
  key = {tab.name}
  className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism':'rounded-4'}`}
  onClick={handleClick}
  style={activeStyles}
  >
    <img
    src={tab.icon}
    alt={tab.name}
    className={`${isFilterTab? 'w-2/3 h-2/3':'h-11/12 w-11/12 object-contain'}`}
    />

  </div>;
};

export default Tab;
