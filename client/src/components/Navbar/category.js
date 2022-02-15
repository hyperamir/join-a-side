import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./styles.scss";

export default function Category(props){
  const { category } = props
  return (
    <option>{category}</option>
  );
} 