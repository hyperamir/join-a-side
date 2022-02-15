import "./Question.scss";

export default function Question(props) {
  return (
    <div className="flex flex-col bg-white px-8 py-6 max-w-lg mx-auto rounded-lg shadow-xl border">
      <div className="flex justify-center items-center">
        <a className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded" href="#">Category</a>
      </div>
      <div className="mt-4">
        <a className="text-lg text-gray-700 font-medium" href="#">Question by the user</a>
      </div>
      <div className="flex flex-row justify-between p-8">
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
          Answer 1
        </button>
        <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
          Answer 2
        </button>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <a className="text-gray-700 text-sm mx-3" href="#">Alex steve</a>
        </div>
        <span className="font-light text-sm text-gray-600">Mar 10, 2018</span>
      </div>
    </div>
  );
}