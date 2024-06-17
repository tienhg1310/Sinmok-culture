import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import "./styles.scss";
interface DropdownProps {
  id: number;
  label: string;
}

const Dropdown = ({ data }: { data: DropdownProps[] }) => {
  const [isOpen, setOpen] = useState(false);
  const [items] = useState<DropdownProps[]>(data);
  const [selectedItem, setSelectedItem] = useState<DropdownProps | null>(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (e: DropdownProps) => {
    setSelectedItem(e)
    setOpen(false)
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedItem
          ? items.find((item: DropdownProps) => item.id === selectedItem.id)!.label
          : items[0].label}
        <HiChevronDown size={22} />
      </div>
      <div className={`dropdown-body ${isOpen && "open"}`}>
        {items.map((item: DropdownProps) => (
          <div
            className="dropdown-item"
            onClick={() => handleItemClick(item)}
            key={item.id}
          >
            <span
              className={`dropdown-item-dot ${
                item.id === selectedItem?.id && "selected"
              }`}
            >
              •{" "}
            </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Dropdown;
