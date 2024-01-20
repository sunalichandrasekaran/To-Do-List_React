import React, { useState } from "react";

const InputArea = (props) => {
  const [input, setInputs] = useState("");

  function handleChange(e) {
    setInputs(e.target.value);
  }

  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={input} />
      <button
        onClick={() => {
          props.addItems(input);
          setInputs("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
