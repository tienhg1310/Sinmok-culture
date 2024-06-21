import { FC } from "react";
import { IoMdArrowDropup } from "react-icons/io";
import "./SelectInput.scss";

type Props = {
  dropdownId: string;
  selectedDropdown: string;
  setSelectedDropdown: (dropdownId: string) => void;
  options: string[];
  selectedOption: string; // Add index signature
  setSelectedOption: (option: string) => void;
  icon?: string;
};

const SelectInput: FC<Props> = ({
  dropdownId,
  options,
  selectedDropdown,
  setSelectedDropdown,
  selectedOption,
  setSelectedOption,
  icon,
}) => {
  const toggleDropdown = () => {
    selectedDropdown === dropdownId && setSelectedDropdown("");
    selectedDropdown !== dropdownId && setSelectedDropdown(dropdownId);
  };

  const selectOption = (option: string) => {
    setSelectedOption(option);
    setSelectedDropdown("");
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <img src={icon} alt="" className="dropdown-image" />
        <p>{selectedOption}</p>
        <span
          className={`arrow ${selectedDropdown === dropdownId ? "up" : "down"}`}
        >
          <IoMdArrowDropup size={20} />
        </span>
      </button>
      {selectedDropdown === dropdownId && (
        <ul className="dropdown-menu">
          {options &&
            options.map((option, index) => (
              <li key={index} onClick={() => selectOption(option)}>
                {option}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SelectInput;
