import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./styles.scss";

import Comment from './Comment';
import Question from './Question';

export default function Post(props) {
  return (
    <div>
      <Question></Question>
      <Comment></Comment>
    </div>
  );
}