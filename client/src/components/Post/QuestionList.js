import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getVotePercent } from '../helpers/helper';
import axios from 'axios';
import Post from '.';

import "./Vote.scss";
import "./Question.scss";

export default function QuestionList(props) {
  const [category, setCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/categories/${params.id}/questions`)
      .then((response) => {
        //console.log('response from backend:', response.data)
        setCategory(response.data);
      })
      .catch(() => {
        console.log('Cannot find your category');
      });
  }, [params.id]); 

  return (
    <div>
      {
        category.map(question => {
          return (
            <Link key={question.id} to={`/categories/${question.category_id}/${question.id}`}>
              {/* Question */}
              <div className="flex flex-col bg-white px-8 py-6 max-w-lg mx-auto rounded-lg shadow-xl border">
                <div className="flex justify-center items-center">
                  <a className="px-2 py-1 bg-indigo-700 text-sm text-green-100 rounded" href="#">Question {question.id}</a>
                </div>
                <div className="mt-4">
                  <a className="text-lg text-gray-700 font-medium" href="#">{question.title}</a>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <a className="text-gray-700 text-sm mx-3" href="#">User {question.user_id}</a>
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
            </Link>
          )
        })
      }
      {/* <Post
      key= {props.id}
      title = {props.title}
      answer_a = {props.answer_a}
      ></Post> */}
    </div>
  );
};