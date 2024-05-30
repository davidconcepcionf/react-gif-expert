import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (newCategory) => {
    console.log(newCategory);
    if (
      categories.some((cat) => cat.toLowerCase() === newCategory.toLowerCase())
    )
      return;
    setCategories((c) => [newCategory, ...c]);
  };

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory onNewCategory={onAddCategory} />

      {/* listado de gif */}

      {/* gif item */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
