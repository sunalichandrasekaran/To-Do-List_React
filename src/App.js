import { useState } from "react";
import InputArea from "./Componenet/TextInputs";
import TodoItems from "./Componenet/TodoItems";

function App() {
  const [items, setItems] = useState([]);

  function addItems(input) {
    setItems((previoustate) => {
      return [...previoustate, input];
    });
  }

  function deleteItems(id) {
    setItems((previouItem) => {
      return previouItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="header">
        <h1>To-DO-List</h1>
      </div>
      <InputArea addItems={addItems} />
      <div>
        <ul>
          {items.map((item, index) => {
            return (
              <TodoItems
                key={index}
                text={item}
                deleteItems={deleteItems}
                id={index}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
