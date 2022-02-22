import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./Vote.scss";
import "./Question.scss";
import "./index.scss"
import { getCurrentPath, getVotePercent, getRandomPhotoURL } from '../helpers/helper';
import moment from 'moment'

export default function Post(props) {
  const { user } = props

  const [countVoteA, setCountVoteA] = useState(0)
  const [countVoteB, setCountVoteB] = useState(0)
  const [listQuestions, setListQuestions] = useState([]);
  const [listComments, setListComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [commentNameList, setcommentNameList] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    const getQuestion = axios.get(`http://localhost:3000/categories/${params.id}/questions/${params.question_id}`)
    const getComment = axios.get(`http://localhost:3000/comments/index`)

    let currentPath = getCurrentPath();
    axios.all([getQuestion, getComment])
      .then(
        axios.spread((...allData) => {
          const getAllQuestions = allData[0].data
          const getAllComments = allData[1].data
          const getQuestionsComments = getAllComments.filter(x => x.question_id === currentPath)

          setCountVoteA(getAllQuestions.vote_a)
          setCountVoteB(getAllQuestions.vote_b)
          setListQuestions(getAllQuestions)
          setListComments(getQuestionsComments)

          getCommentNames(getQuestionsComments)
          .then((res) => {
            setcommentNameList(res)
           
          });
        })
      )
  }
  
  const getCommentNames = async  (commentNames) => {
    const results = await Promise.all(commentNames.map(comments => {
      const header = {
        user_id: comments.user_id
      }
      
      return axios.get("http://localhost:3000/users/show", {params: header} )
      .then((res) => {
       
        const name = {
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          user_id: user.id
        };

      return name

      })
    }))

    return results;
  }

  useEffect(() => {
    fetchData();
  }, [params.id]);

  useEffect(()=>{
    
  }, [commentNameList])

  //using useRef hook to disable vote button after clicked
  let btnA = useRef();
  let btnB = useRef();

  const handleVoteA = () => {
    setCountVoteA(countVoteA + 1)
    //check if button clicked
    if (btnA.current) {
      btnA.current.setAttribute("disabled", "disabled");
    }
    let VoteABobj = {
      vote_a: countVoteA + 1,
      vote_b: countVoteB,
      question_id: Number(params.question_id)
    };

    axios.put(`http://localhost:3000/votes/${params.question_id}`, VoteABobj)
      .catch(error => {
        console.log(('put error: '), error);
      })
  }

  const handleVoteB = () => {
    setCountVoteB(countVoteB + 1)

    if (btnB.current) {
      btnB.current.setAttribute("disabled", "disabled");
    }

    let VoteABobj = {
      vote_a: countVoteA,
      vote_b: countVoteB + 1,
      question_id: Number(params.question_id)
    };

    axios.put(`http://localhost:3000/votes/${params.question_id}`, VoteABobj)
      .catch(error => {
        console.log(('put error: '), error);
      })
  }

  const postComment = () => {
    const question_id = getCurrentPath();
    const commentObject = {
      comment: newComment,
      question_id: question_id,
      user_id: user.id
    }

    axios.post("http://localhost:3000/comments", commentObject)
      .then((response) => {
        setListComments([...listComments, response.data])
        //clean the textarea after submitting the comment
        setNewComment("")
        fetchData()
      })
  }

  const deleteComment = (commentId) => {
    const question_id = getCurrentPath();
    const commentObject = {
      comment_id: commentId,
      question_id: question_id,
      user_id: user.id
    }

    if (window.confirm("Are you sure you want to remove comment?")) {
      axios.delete(`http://localhost:3000/comments/${commentId}`, commentObject)
        .then((response) => {
          let newList = [...listComments];
          const newerList = newList.filter((comment) => comment.id !== commentId)
          setListComments(newerList)
          fetchData()
        })
    }
  }


  return (
    <div className="question-banner">
      {/* Question */}
      <div className="flex flex-col bg-white p-8 w-3/6 mx-auto rounded-lg shadow-xl border opacity-90">
        <div className="flex justify-center items-center">
          <a className="px-2 py-1 bg-indigo-700 text-sm text-green-100 rounded" href="#">Question {listQuestions.id}</a>
        </div>
        <div className="mt-4">
          <a className="text-lg text-gray font-medium" href="#"> {listQuestions.title} </a>
        </div>
        {/* Buttons */}
        <div className="flex flex-row justify-between p-8">
          <button ref={btnA} onClick={() => handleVoteA()} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            {listQuestions.answer_a}
          </button>
          <button ref={btnB} onClick={() => handleVoteB()} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
            {listQuestions.answer_b}
          </button>
        </div>
        {/* User && Date */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center">
            <a className="text-gray text-sm mx-3" href="#">User</a>
          </div>
          <span className="font-light text-sm text-gray-600">3 days ago</span>
        </div>
      </div>

      {/* Vote */}
      <div className="form flex items-center justify-center p-4">
        <div className="votes-box bg-white shadow-xl border p-8 w-3/6 opacity-90">

          {/* Status Bar */}
          <div className="bar-container">
            <div className="votes bar" style={{ width: getVotePercent(countVoteA, countVoteB) }}></div>
          </div>
          {/* listQuestions.vote_a, listQuestions.vote_b */}
          {/* Votes */}
          <div className="flex flex-row justify-between">
            <p>{countVoteA}</p>
            <p>{countVoteB}</p>
          </div>
        </div>
      </div>

      {/* Submit Comments */}
      <div className="flex justify-center items-center">
        <div className="bg-white shadow-xl border p-8 w-3/6 opacity-90">

          <div className="flex ml-3">
            <div className="mr-3">
              <img src="http://picsum.photos/id/10/40/40" alt="" className="rounded-full" />
            </div>
            
            <div>
              { user 
              ? <div>
                  <h1 className="font-semibold">{user.first_name} {user.last_name}</h1>
                  <p className="text-xs text-gray">10 minutes ago</p>
                </div> 
              : <div>
                  <h1 className="font-semibold">Please Login!</h1>
                  <a className="text-xs text-gray">Join the conversation</a>
                </div>
              }
            </div>
          </div>

          <div className="mt-3 p-3 w-full">
            <textarea onChange={(event) => { setNewComment(event.target.value) }} rows="3" className="border p-2 rounded w-full" placeholder="Write a comment..." value={newComment} ></textarea>
          </div>

          <div className="flex justify-end p-4 mx-3">
            <div>
              <button onClick={postComment} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">Submit</button>
            </div>
          </div>
        </div>

      </div>
      {/* Comment section */}
      <div className="flex items-center justify-center p-2">
        <div className="bg-white shadow-xl border p-8 w-3/6 opacity-90">
          <h1 className="p-4"><b>Comments</b></h1>

          {/* Populate comments */}
          {             
            listComments.map((comments, index) => {
              let localTime = moment(new Date(comments.created_at)).utc().utcOffset("-10:00").format("YYYY-MM-DD HH:mm");

              let user = null
              if (index < commentNameList.length) {
                user = {
                  first_name: commentNameList[index].first_name,
                  last_name: commentNameList[index].last_name,
                  user_id: commentNameList[index].user_id
                }
              }
              else {
                user = {
                  first_name: "Not Found",
                  last_name: "Not Found"
                }
              }
              return (
                <div key={comments.id}>
                  <div className="flex justify-center items-center mb-8">
                    {/* <div className="w-1/5">
                      <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://picsum.photos/20/30" alt="user image" />
                    </div> */}
                    <div className="w-4/5">
                      <div>
                        <span className="font-semibold text-gray-800">{user.first_name} {user.last_name}</span>
                      </div>
                      <div className="">
                        <a href="" className="text-black-600 mr-2">{comments.comment}</a>
                      </div>
                      <div>
                        <a href="" className="text-gray-400">Created at</a>
                        <p>{localTime}</p>
                      </div>
                      <div>
                        {user.user_id === comments.user_id && <button onClick={() => deleteComment(comments.id)}>Delete</button>}
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