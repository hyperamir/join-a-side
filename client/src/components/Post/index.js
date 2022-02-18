import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Vote.scss";
import "./Question.scss";
import { getCurrentPath, getVotePercent } from '../helpers/helper';


export default function Post(props) {
  const [listQuestions, setListQuestions] = useState([]);
  const [listComments, setListComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const params = useParams();

  const fetchData = () => {
    const getQuestion = axios.get(`http://localhost:3000/categories/${params.id}/questions/${params.question_id}`)
    const getComment = axios.get(`http://localhost:3000/comments/index`)
    
    let currentPath = getCurrentPath();

    console.log(getCurrentPath())
    axios.all([getQuestion, getComment])
    .then(
      axios.spread((...allData) => {
        const getAllQuestions = allData[0].data
        const getAllComments = allData[1].data
        const getQuestionsComments = getAllComments.filter(x => x.question_id === currentPath)
        

        setListQuestions(getAllQuestions)
        setListComments(getQuestionsComments)
        // console.log(getAllComments)
        // console.log(getAllComments.filter(x => x.question_id === currentPath))
        // console.log(getAllComments[currentPath].question_id)
      })
    )
  }

  useEffect(() => {
    fetchData();
  }, [params.id]);

  const postComment = () => {
    const tempUser = 1;
    const question_id = getCurrentPath();
    const commentObject = {
      comment: newComment,
      question_id: tempUser,
      user_id: question_id
    }
    console.log()
    axios.post("http://localhost:3000/comments", commentObject)
  }

  return (
    <div>
      {/* Question */}
      <div className="flex flex-col bg-white px-8 py-6 max-w-lg mx-auto rounded-lg shadow-xl border">
        <div className="flex justify-center items-center">
          <a className="px-2 py-1 bg-indigo-700 text-sm text-green-100 rounded" href="#">Question {listQuestions.id}</a>
        </div>
        <div className="mt-4">
          <a className="text-lg text-gray-700 font-medium" href="#"> {listQuestions.title} </a>
        </div>
        {/* Buttons */}
        <div className="flex flex-row justify-between p-8">
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            {listQuestions.answer_a}
          </button>
          <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            {listQuestions.answer_b}
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
            <div className="votes bar" style={{width: getVotePercent(listQuestions.vote_a, listQuestions.vote_b) }}></div>
          </div>

          {/* Votes */}
          <div className="flex flex-row justify-between">
            <p>{listQuestions.vote_a}</p>
            <p>{listQuestions.vote_b}</p>
          </div>
        </div>
      </div>

      {/* Comment section */}
      <div className="flex items-center justify-center p-2">
        <div className="bg-white shadow-xl border p-8 w-3xl">
          <div className="mb-4">
              <h1 className="font-semibold text-gray-800">Comments</h1>
          </div>
          <div class="flex justify-center items-center">

<div class="w-1/2 bg-white p-2 pt-4 rounded shadow-lg">
  <div class="flex ml-3">
    <div class="mr-3">
      <img src="http://picsum.photos/50" alt="" class="rounded-full"/>
    </div>
    <div>
      <h1 class="font-semibold">Itay Buyoy</h1>
      <p class="text-xs text-gray-500">2 seconds ago</p>
    </div>

  </div>

  <div class="mt-3 p-3 w-full">
    <textarea onChange={(event) => {setNewComment(event.target.value)}}  rows="3" class="border p-2 rounded w-full" placeholder="Write something..."></textarea>
  </div>

  <div class="flex justify-between mx-3">
    <div><button onClick={postComment} class="px-4 py-1 bg-gray-800 text-white rounded font-light hover:bg-gray-700">Submit</button></div>
    <div>
    </div>
  </div>

</div>

</div>
      {/* Populate comments */}
      {
        listComments.map(comments => {
          return (
            <div>
              <div className="flex justify-center items-center mb-8">
                <div className="w-1/5">
                  <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
                </div>
                <div className="w-4/5">
                  <div>
                    <span className="font-semibold text-gray-800">Username{comments.id}</span>
                  </div>
                  <div className="">
                    <a href="" className="text-black-600 mr-2">{comments.comment}</a>
                  </div>
                  <div>
                    <a href="" className="text-gray-400">Created at</a>
                    <p>{comments.created_at}</p>
                  </div>
                </div>
              </div>
            </div>
                )
              })
            }
          </div>
        </div>
    </div>
  );
};