import "./Comment.scss";

export default function Comment(props) {
  return (
    <div className="flex flex-row justify-center">

      {/* Comment section for Answer 1 */}
      <div className="flex items-center justify-center p-2">
        <div className="bg-white shadow-xl border p-8 w-3xl">
          <div className="mb-4">
            <h1 className="font-semibold text-gray-800">Comments Answer 1</h1>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
              </div>
              <div className="">
                <a href="" className="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" className="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Bianca Chen</span>
              </div>
              <div className="">
                <a href="" className="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" className="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment section for Answer 2 */}
      <div className="flex items-center justify-center">
        <div className="bg-white shadow-xl border p-8 w-3xl">
          <div className="mb-4">
            <h1 className="font-semibold text-gray-800">Comments Answer 2</h1>
          </div>
          <div className="flex justify-center items-center mb-8">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Ezio Dani</span>
              </div>
              <div className="">
                <a href="" className="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" className="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-1/5">
              <img className="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div className="w-4/5">
              <div>
                <span className="font-semibold text-gray-800">Bianca Chen</span>
              </div>
              <div className="">
                <a href="" className="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" className="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}