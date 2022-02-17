import React, {useEffect, useState} from "react";
import axios from "axios"
import Category from "./Catagory"
import Error from "./Error"
export default function SubmitForm(props) {
  const [errorList, SetErrorList] = useState(["","","","",""]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [user, setUser] = useState("");
  const [category, setCategory] = useState({name: "", id: 0});

  

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
    axios.get("http://localhost:3000/categories")
  .then(response => {
    setCategoriesList(response.data);
  })
  .catch(error => {
    console.log(error);
  })
  }

  const reset = () => {
    setQuestion("");
    setOption1("");
    setOption2("");
    setUser("");
    setCategory({name: "", id: 0});
    SetErrorList(["","","","",""]);
    

  }

  const submit = () => {
    const errors = ["","","","",""];
    //console.log(question);
    // question field 
    if (question.length <= 0 ) {
      errors[0] = "Please fill out this field.";
    }
    else if (question.length > 80) {
      errors[0] = "Char limit 80.";
    }

    // option 1 field
    //console.log(option1);
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

    //console.log(user);
    // user field
    if (user.length <= 0 ) {
      errors[3] = "Please fill out this field.";
    }
    else if (user.length > 80) {
      errors[3] = "Char limit 80.";
    }

    //console.log(category);
    // category field
    console.log(category.id)
    if (category.id <= 0) {
      errors[4] = "Please Select a option field.";
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
        user_id:  parseInt(user)
      }
      console.log("post this",questionObject);
      axios.post("http://localhost:3000/questions/create", questionObject)
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
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                  Username
                </label>
                { errorList[3] && <input value={user} onChange={(event) => {setUser(event.target.value)}} className="border-red-500 appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="ex. sam1234" />}
                { !errorList[3] && <input value={user} onChange={(event) => {setUser(event.target.value)}} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-username" type="text" placeholder="ex. sam1234" />}
                {errorComponents[3]}
              </div>
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                  Category
                </label>
                <div className="relative">
                  { errorList[4] && <select value={category.name} onChange={(event) => {handleID(event)}} className=" border-red-500 block appearance-none w-full bg-gray-200 border  text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                    <Category value={""} id={0}/>
                    {categorysComponents}
                  </select>} 
                  { !errorList[4] && <select value={category.name} onChange={(event) => {handleID(event)}} className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-category">
                    <Category value={""} id={0}/>
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
            <button onClick={reset} className="flex-shrink-0 border-transparent border-4 text-indigo-500 hover:text-indigo-800 text-sm py-1 px-2 rounded" type="button">
              Reset
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}