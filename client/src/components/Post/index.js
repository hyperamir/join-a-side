// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// import "./index.scss";

// import Question from './Question';
// import QuestionList from '../QuestionList';
// import Vote from './Vote';
// import Comment from './Comment';

// export default function Post(props) {
//   return (
//     <div>
//       <Question></Question>
//       <Vote></Vote>
//       <Comment></Comment>
//     </div>
//   );
// }

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Vote.scss";
import "./Question.scss";
import { getCurrentPath, arrayFindObjectByProp, getVotePercent } from '../helpers/helper';
import QuestionList from './QuestionList';

export default function Post(props) {
  const [question, setQuestion] = useState([]);
  const params = useParams();
  useEffect(() => {
    axios.get(`http://localhost:3000/categories/${params.id}/questions/${params.question_id}`)
      .then((response) => {
        //console.log('response from backend: questions', response.data)
        setQuestion(response.data);
      })
      .catch(() => {
        console.log('Cannot find your category');
      });
  }, [params.id]);

  // console.log(getCurrentPath());
  // console.log(arrayFindObjectByProp(question, "id", getCurrentPath()))

  // const currentQuestion = arrayFindObjectByProp(question, `${question.id}`, getCurrentPath());
  // console.log('currentquestion: ', currentQuestion)

  return (
    <div>
      {/* Question */}
      <div className="flex flex-col bg-white px-8 py-6 max-w-lg mx-auto rounded-lg shadow-xl border">
        <div className="flex justify-center items-center">
          <a className="px-2 py-1 bg-indigo-700 text-sm text-green-100 rounded" href="#"></a>
        </div>
        <div className="mt-4">
          <a className="text-lg text-gray-700 font-medium" href="#"> {question.title} </a>
        </div>
        {/* Buttons */}
        <div className="flex flex-row justify-between p-8">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            {question.answer_a}
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            {question.answer_b}
          </button>
        </div>
        {/* User && Date */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <a className="text-gray-700 text-sm mx-3" href="#">User</a>
          </div>
          <span className="font-light text-sm text-gray-600">Date</span>
        </div>
      </div>

      {/* Vote */}
      <div className="flex items-center justify-center p-4">
        <div className="bg-white shadow-xl border p-8 w-3/6">

          {/* Status Bar */}
          <div className="container">
            <div className="votes bar" style={{width: getVotePercent(question.vote_a, question.vote_b) }}></div>
          </div>

          {/* Votes */}
          <div className="flex flex-row justify-between">
            <p>{question.vote_a}</p>
            <p>{question.vote_b}</p>
          </div>
        </div>
      </div>
    </div>
  );
};