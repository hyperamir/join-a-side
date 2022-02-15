import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./index.scss";

import Question from './Question';
import Vote from './Vote';
import Comment from './Comment';

export default function Post(props) {
  return (
    <div>
      <Question></Question>
      <Vote></Vote>
      <Comment></Comment>
    </div>
  );
}