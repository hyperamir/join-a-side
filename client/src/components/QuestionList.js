import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

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
    <div>
      {
        category.map(question => {
          return (
            <Link key={question.id} to="/">
              <div className="flex flex-col bg-white px-8 py-6 max-w-lg mx-auto rounded-lg shadow-xl border">
                <div className="flex justify-center items-center">
                  <a className="px-2 py-1 bg-indigo-700 text-sm text-green-100 rounded" href="#">Category {question.id}</a>
                </div>
                <div className="mt-4">
                  <a className="text-lg text-gray-700 font-medium" href="#">{question.title}</a>
                </div>
                <div className="flex flex-row justify-between p-8">
                  <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
                    {question.answer_a}
                  </button>
                  <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
                    {question.answer_b}
                  </button>
                </div>
              </div>
              
              <div className="flex items-center justify-center p-4">
                <div className="bg-white shadow-xl border p-8 w-3/6">
                
                {/* Status Bar */}
                <div className="container">
                  <div className="votes bar"></div>
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