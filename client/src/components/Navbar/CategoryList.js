import "./styles.scss";

export default function CategoryList(props){
  const { category } = props
  return (
    <option>{category}</option>
  );
} 