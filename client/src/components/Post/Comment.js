import "./Comment.scss";

export default function Comment(props) {
  return (
    <div class="flex flex-row justify-center">

      {/* Comment section for Answer 1 */}
      <div class="flex items-center justify-center p-4">
        <div class="bg-white shadow-xl border p-8 w-3xl">
          <div class="mb-4">
            <h1 class="font-semibold text-gray-800">Comments Answer 1</h1>
          </div>
          <div class="flex justify-center items-center mb-8">
            <div class="w-1/5">
              <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
            </div>
            <div class="w-4/5">
              <div>
                <span class="font-semibold text-gray-800">Ezio Dani</span>
              </div>
              <div class="">
                <a href="" class="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" class="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-1/5">
              <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div class="w-4/5">
              <div>
                <span class="font-semibold text-gray-800">Bianca Chen</span>
              </div>
              <div class="">
                <a href="" class="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" class="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comment section for Answer 2 */}
      <div class="flex items-center justify-center">
        <div class="bg-white shadow-xl border p-8 w-3xl">
          <div class="mb-4">
            <h1 class="font-semibold text-gray-800">Comments Answer 2</h1>
          </div>
          <div class="flex justify-center items-center mb-8">
            <div class="w-1/5">
              <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/men/20.jpg" alt="user image" />
            </div>
            <div class="w-4/5">
              <div>
                <span class="font-semibold text-gray-800">Ezio Dani</span>
              </div>
              <div class="">
                <a href="" class="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" class="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center">
            <div class="w-1/5">
              <img class="w-12 h-12 rounded-full border border-gray-100 shadow-sm" src="https://randomuser.me/api/portraits/women/20.jpg" alt="user image" />
            </div>
            <div class="w-4/5">
              <div>
                <span class="font-semibold text-gray-800">Bianca Chen</span>
              </div>
              <div class="">
                <a href="" class="text-black-600 mr-2">Comments by the user</a>
              </div>
              <div>
                <a href="" class="text-gray-400">Comment posted ago</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}