import React, {useEffect, useState} from "react";
import axios from "axios"
import Category from "./Catagory"
import Error from "./Error"
export default function SubmitForm(props) {
  const [errorList, SetErrorList] = useState(["","","","",""]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [user, setUser] = useState("");
  
  useEffect(() => {
    getAllCategorys();
  }, []); 

  const getAllCategorys = () => {
    // localhost should not be hardcoded in should be a proxy api
    axios.get("http://localhost:3000/categories")
  .then(response => {
    setCategoriesList(response.data);
  })
  .catch(error => {
    console.log(error);
  })
  }

  const submit = () => {
    const errors = ["","","","",""];
    // if (question.length <= 0 ) {
    //   errors[0] = "Please fill out this field."
    // }
    console.log(question);
    // question field 
    if (question.length <= 0 ) {
      errors[0] = "Please fill out this field."
    }
    else if (question.length > 80) {
      errors[0] = "Please fill out this field."
    }

    // option 1 field
    console.log(option1);
    if (option1.length <= 0 ) {
      errors[1] = "Please fill out this field."
    }
    else if (option1.length > 80) {
      errors[1] = "Please fill out this field."
    }

    console.log(option2);
    // option 2 field
    if (option2.length <= 0 ) {
      errors[2] = "Please fill out this field."
    }
    else if (option2.length > 80) {
      errors[2] = "Please fill out this field."
    }

    console.log(category);
    // category field
    if (category.length <= 0 ) {
      errors[3] = "Please Select a option field."
    }
    
    console.log(user);
    // user field
    if (user.length <= 0 ) {
      errors[4] = "Please fill out this field."
    }
    else if (user.length > 80) {
      errors[4] = "Please fill out this field."
    }

    SetErrorList(errors)
  }

  // For category drop down
  const categorysComponents = categoriesList.map((value) => {
    return(
      <Category 
        key={value.id}
        category={value.category}
      />
    );
  });

  // For error handleing
  const errorComponents = errorList.map((value) => {
    console.log(value)
    return(
      <Error 
        key={value.id}
        error={value}
      />
    );
  });


  return (
    <div className="flex justify-center">
      <div className="flex items-center justify-center p-2">
        <div className="bg-white shadow-xl border p-8 w-3xl">

          {/* Submit Form */}
          <form className="w-full max-w-lg">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                  Question to Submit
                </label>
                { errorList[0] && <input onChange={(event) => {setQuestion(event.target.value)}} className=" border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-question" type="text" placeholder="ex. apples or bananas?" />}
                { !errorList[0] && <input onChange={(event) => {setQuestion(event.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-question" type="text" placeholder="ex. apples or bananas?" />}
                <p className="text-gray-600 text-xs italic">Maximum 80 Characters</p>
                {errorComponents[0]}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  Answer Option 1
                </label>
                { errorList[1] && <input onChange={(event) => {setOption1(event.target.value)}} className='border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-answer-1" type="text" placeholder="ex. apple" />}
                { !errorList[1] && <input onChange={(event) => {setOption1(event.target.value)}} className='appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' id="grid-answer-1" type="text" placeholder="ex. apple" />}
                {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
                {errorComponents[1]}
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Answer Option 2
                </label>
                { errorList[2] && <input onChange={(event) => {setOption2(event.target.value)}} className=" border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-answer-2" type="text" placeholder="ex. banana" />}
                { !errorList[2] && <input onChange={(event) => {setOption2(event.target.value)}} className=" appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-answer-2" type="text" placeholder="ex. banana" />}
                {errorComponents[2]}
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  Username
                </label>
                { errorList[3] && <input onChange={(event) => {setUser(event.target.value)}} className="border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="ex. sam1234" />}
                { !errorList[3] && <input onChange={(event) => {setUser(event.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="ex. sam1234" />}
                {errorComponents[3]}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Category
                </label>
                <div className="relative">
                  { errorList[4] && <select onChange={(event) => {setCategory(event.target.value)}} className=" border-red-500 block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                    {categorysComponents}
                  </select>}
                  { !errorList[4] && <select onChange={(event) => {setCategory(event.target.value)}} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                    {categorysComponents}
                  </select>}
                  {errorComponents[4]}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                  Open for (comming soon!)
                </label>
                <input disabled={"true"} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-session-date" type="text" placeholder="ex. 7 days" />
              </div>
            </div>

            {/* Buttons */}
            <button onClick={submit} type="submit" className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 mt-6 rounded" type="button">
              Submit
            </button>
            <button className="flex-shrink-0 border-transparent border-4 text-indigo-500 hover:text-indigo-800 text-sm py-1 px-2 rounded" type="button">
              Cancel
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}