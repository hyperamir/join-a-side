import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function QuestionList(props) {
  const [category, setCategory] = useState([]);
  const params = useParams();


  useEffect(() => {
    axios.get(`http://localhost:3000/categories/${params.id}/questions`)
      .then((response) => {
        // console.log('response from backend:', response.data)
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
            <div key={question.id}>
              <h2>{question.title}</h2>
              <h3>{question.answer_a} </h3>
              <h3>{question.answer_b} </h3>
            </div>
          )
        })
      }
    </div>
  );
};