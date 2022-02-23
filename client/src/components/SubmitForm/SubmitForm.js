import React, {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import axios from "axios"
import Category from "./Catagory"
import Error from "./Error"
import "./SubmitForm.scss";

export default function SubmitForm(props) {
  const [errorList, SetErrorList] = useState(["","","","",""]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [user, setUser] = useState("");
  const [category, setCategory] = useState({name: "", id: 0});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getAllCategorys();
    console.log(categoriesList)
  }, []); 

  const handleID = (event) => {
    //get name from selected option from category 
    const name = event.target.options[event.target.selectedIndex].text;
    let id = -1
    categoriesList.forEach((category) => {
      // if category name is same as category elelment from categoriesList use that id
      if (name === category.category) {
        id = category.id
      }
    }) 
    
    setCategory(prevState => ({
      ...prevState,
      name: name,
      id: id
       }));
   console.log(category)
  }

  const getAllCategorys = () => {
    // localhost should not be hardcoded in should be a proxy api
    axios.get("categories")
  .then(response => {
    setCategoriesList(response.data);
  })
  .catch(error => {
    console.log(error);
  });
  }

  const reset = () => {
    setQuestion("");
    setOption1("");
    setOption2("");
    setCategory({name: "", id: 0});
    SetErrorList(["","","","",""]);   
  }

  const submit = () => {
    const errors = ["","","","",""];
    // question field 
    if (question.length <= 0 ) {
      errors[0] = "Please fill out this field.";
    }
    else if (question.length > 80) {
      errors[0] = "Char limit 80.";
    }

    // option 1 field
    if (option1.length <= 0 ) {
      errors[1] = "Please fill out this field.";
    }
    else if (option1.length > 80) {
      errors[1] = "Char limit 80.";
    }

    //console.log(option2);
    // option 2 field
    if (option2.length <= 0 ) {
      errors[2] = "Please fill out this field.";
    }
    else if (option2.length > 80) {
      errors[2] = "Char limit 80.";
    }

    // category field
    console.log(category.id)
    if (category.id <= 0) {
      errors[3] = "Please Select a option field.";
    }

    if (props.user === null) {
      // this error is for logic only wont show up for user
      errors[4] = "user not login in";
    }

    SetErrorList(errors);

    let errorFound = false;
    errors.forEach((error) => {
      if (error !== "") {
        errorFound = true;
      }
    })  
    if (!errorFound) {
      const questionObject = {
        title: question,
        answer_a: option1,
        answer_b: option2,
        category_id: category.id,
        user_id:  props.user.id
      }
      console.log("post this",questionObject);
      axios.post("questions/create", questionObject)
      .then((response)=>{
        console.log('create response:', response)
      })
      .catch(error => {
        console.log(error);
      });
      
    }
    
  }

  // For category drop down
  const categorysComponents = categoriesList.map((value) => {
    return(
      <Category 
        key={value.id}
        id={value.id}
        category={value.category}
      />
    );
  });

  // For error handleing
  const errorComponents = errorList.map((value) => {
    return(
      <Error 
        key={value.id}
        error={value}
      />
    );
  });


  return (
    <div className="submit-banner bg-cover bg-center">
      <div className="flex justify-center">
        <div className="flex items-center justify-center m-20 p-20">
          <div className="bg-white shadow-xl border p-8 w-3xl opacity-90">

            {/* Submit Form */}
            <form className="w-full max-w-lg">
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                    Question to Submit
                    {props.user === null &&<Error error={"User must be login to post a question"}/>}
                  </label>
                  
                  { errorList[0] && <input value={question} onChange={(event) => {setQuestion(event.target.value)}} className=" border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-question" type="text" placeholder="ex. apples or bananas?" />}
                  { !errorList[0] && <input value={question} onChange={(event) => {setQuestion(event.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-question" type="text" placeholder="ex. apples or bananas?" />}
                  <p className="text-gray-600 text-xs italic">Maximum 80 Characters</p>
                  {errorComponents[0]}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                    Answer Option 1
                  </label>
                  { errorList[1] && <input value={option1} onChange={(event) => {setOption1(event.target.value)}} className='border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-answer-1" type="text" placeholder="ex. apple" />}
                  { !errorList[1] && <input value={option1} onChange={(event) => {setOption1(event.target.value)}} className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-answer-1" type="text" placeholder="ex. apple" />}
                  {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                  {errorComponents[1]}
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                    Answer Option 2
                  </label>
                  { errorList[2] && <input value={option2} onChange={(event) => {setOption2(event.target.value)}} className=" border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-answer-2" type="text" placeholder="ex. banana" />}
                  { !errorList[2] && <input value={option2} onChange={(event) => {setOption2(event.target.value)}} className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-answer-2" type="text" placeholder="ex. banana" />}
                  {errorComponents[2]}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/1 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                    Category
                  </label>
                  <div className="relative">
                    { errorList[3] && <select value={category.name} onChange={(event) => {handleID(event)}} className=" border-red-500 block appearance-none w-full bg-gray-200 border  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                      <Category value={""} id={0}/>
                      {categorysComponents}
                    </select>} 
                    { !errorList[3] && <select value={category.name} onChange={(event) => {handleID(event)}} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                      <Category value={""} id={0}/>
                      {categorysComponents}
                    </select>}
                    {errorComponents[3]}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>
                {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                    Open for
                  </label>
                  <input disabled={"true"} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-session-date" type="text" placeholder="ex. 7 days" />
                </div> */}
              </div>

              {/* Buttons */}
              <button onClick={() => {submit(); setShowModal(true)}} type="submit" className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 mt-6 rounded" type="button">
                Submit
              </button>
              <button onClick={reset} className="flex-shrink-0 border-transparent border-4 text-indigo-500 hover:text-indigo-800 text-sm py-1 px-2 rounded" type="button">
                Reset
              </button>
              
              {/* Show modal on Submit */}
              {showModal ? (
                <>
                  <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                  >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                          <h3 className="text-3xl font-semibold text-indigo-700">
                            Submit Successful! <FontAwesomeIcon icon={solid('circle-check')} />
                          </h3>
                          <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setShowModal(false)}
                          >
                            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                            x
                            </span>
                          </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                           You successfully started a conversation!<br />
                           <FontAwesomeIcon icon={solid('arrow-up')} /> Start joining a side by selecting categories above
                          </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                          {/* <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button> */}
                          <button
                            className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Continue
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
        
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}