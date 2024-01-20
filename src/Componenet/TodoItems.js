import React from "react";

const TodoItems = (props) => {
  return (
    <div onClick={() => props.deleteItems(props.id)}>
      <li>{props.text}</li>
    </div>
  );
};

export default TodoItems;
