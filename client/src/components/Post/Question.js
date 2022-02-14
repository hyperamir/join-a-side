import "./Question.scss";

export default function Question(props) {
  return (
    <div class="flex flex-col bg-white px-8 py-6 max-w-lg mx-auto rounded-lg shadow-lg">
      <div class="flex justify-center items-center">
        <a class="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded" href="#">Category</a>
      </div>
      <div class="mt-4">
        <a class="text-lg text-gray-700 font-medium" href="#">Question by the user</a>
      </div>
      <div class="flex flex-row justify-between p-8">
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
          Answer 1
        </button>
        <button class="bg-indigo-500 hover:bg-indigo-700 text-white font-bold mx-2 py-2 px-4 rounded-full">
          Answer 2
        </button>
      </div>
      <div class="flex justify-between items-center mt-4">
        <div class="flex items-center">
          <a class="text-gray-700 text-sm mx-3" href="#">Alex steve</a>
        </div>
        <span class="font-light text-sm text-gray-600">Mar 10, 2018</span>
      </div>
    </div>
  );
}