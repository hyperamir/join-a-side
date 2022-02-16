import "./styles.scss";
import { useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

export default function CategoryList(props){
  const [selectedCategory, setSelectedCategory] = useState(1)
  const { categories } = props

  const params = useParams();
  const navigate = useNavigate();
  

  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
    navigate(`/categories/${event.target.value}`);
  }

  return (
    <select value={selectedCategory} onChange={handleChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
          
          {categories.map(category => {
            return (
              <option key={category.id} value={category.id}>{category.category}</option>
              )
            })}

        </select>
  );
} 