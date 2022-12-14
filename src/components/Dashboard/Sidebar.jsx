import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Hello</h1>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Sidebar;
