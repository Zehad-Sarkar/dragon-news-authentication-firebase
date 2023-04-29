import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditorsInsight from "../../pages/News/EditorsInsight/EditorsInsight";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All categories</h1>
      <div className="ps-4">
        {categories.map((category) => (
          <p category={category} key={category.id}>
            <Link to={`/category/${category.id}`} className="text-decoration-none text-black">{category.name}</Link>
          </p>
        ))}
      </div>
      <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default LeftNav;
