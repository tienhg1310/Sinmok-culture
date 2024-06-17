import React from "react";
import "./styles.scss";

interface Props {
  text: string;
  onClick?: () => void;
  type?: "primary" | "outline";
  style?: React.CSSProperties;
}
function Button({
  text,
  onClick,
  type = "primary",
  style,
}: Props) {
  return (
    <div
    onClick={() => {
      onClick && onClick()
    }}
      style={{
        background: type === "primary" ? "#fea66d" : "#fff",
        ...style,
      }}
      className={`button-component`}
    >
      <span style={{ color: type === "primary" ? "#fff" : "#69cc86" }}>
        {text}
      </span>
    </div>
  );
}

export default Button;
