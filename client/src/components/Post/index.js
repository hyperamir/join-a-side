import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Vote.scss";
import "./Question.scss";
import { getCurrentPath, arrayFindObjectByProp, getVotePercent } from '../helpers/helper';


export default function Post(props) {
  const [question, setQuestion] = useState([]);
  const params = useParams();
  const getQuestions = `http://localhost:3000/categories/${params.id}/questions/${params.question_id}`
  const getComments =`http://localhost:3000/comments/index`
  useEffect(() => {
    axios.get(`http://localhost:3000/categories/${params.id}/questions/${params.question_id}`)
      .then((response) => {
        console.log(response.data);
        setQuestion(response.data);
      })
      .catch(() => {
        console.log('Cannot find your category');
      });
  }, [params.id]);

  return (
    <div>
      {/* Question */}
      <div className="flex flex-col bg-white px-8 py-6 max-w-lg mx-auto rounded-lg shadow-xl border">
        <div className="flex justify-center items-center">
          <a className="px-2 py-1 bg-indigo-700 text-sm text-green-100 rounded" href="#">Question {question.id}</a>
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

      {/* Comment section for Answer 1 */}
      <div className="flex items-center justify-center p-2">
        <div className="bg-white shadow-xl border p-8 w-3xl">
          <div className="mb-4">
            <h1 className="font-semibold text-gray-800">Comment Section for both Answers 1 and Answer 2</h1>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
              </div>
              <div className="">
                <a href="" className="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" className="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Bianca Chen</span>
              </div>
              <div className="">
                <a href="" className="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" className="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};