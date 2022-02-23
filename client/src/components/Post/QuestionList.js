import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getVotePercent } from '../helpers/helper';
import axios from 'axios';
import "./QuestionList.scss";
import moment from 'moment';

import "./Vote.scss";
import "./Question.scss";

export default function QuestionList(props) {
  const [category, setCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get(`http://localhost:3000/categories/${params.id}/questions`)
      .then((response) => {
        console.log('response from backend:', response.data)
        setCategory(response.data);
      })
      .catch(() => {
        console.log('Cannot find your category');
      });
  }, [params.id]);

  return (
    <div className="list-banner bg-cover bg-center">
      {
        category.map(question => {
          let localTime = moment(new Date(question.created_at)).utc().utcOffset("-10:00").format("YYYY-MM-DD HH:mm");
          return (
            <Link key={question.id} to={`/categories/${question.category_id}/${question.id}`}>
              {/* Question */}
              <div className="flex flex-col bg-white p-8 m-10 w-3/6 mx-auto rounded-lg shadow-xl border opacity-90">
                <div className="flex justify-center items-center">
                  <p className="px-2 py-1 bg-indigo-700 text-sm text-green-100 rounded">Question {question.id}</p>
                </div>
                <div className="mt-4">
                  <p className="text-lg text-gray-700 font-medium">{question.title}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="flex items-center">
                    <p className="text-gray-700 text-sm mx-3">By: {question.first_name} {question.last_name}</p>
                  </div>
                  <span className="font-light text-sm text-gray-600">{localTime}</span>
                </div>
              </div>

              {/* Vote */}
              <div className="flex items-center justify-center p-4">
                <div className="bg-white shadow-xl border p-8 w-3/6">

                  {/* Status Bar */}
                  <div className="bar-container">
                    <div className="votes bar" style={{ width: getVotePercent(question.vote_a, question.vote_b) }}></div>
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
    </div>
  );
};