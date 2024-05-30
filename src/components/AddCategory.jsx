import { useState } from "react";

// eslint-disable-next-line react/prop-types
export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState();

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    const newInputValue = inputValue.trim();
    if (newInputValue.length <= 1) return;

    // setCategories((c) => [inputValue, ...c]);
    onNewCategory(newInputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
