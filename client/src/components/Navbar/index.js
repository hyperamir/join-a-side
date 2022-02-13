import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./styles.scss";

export default function Navbar(props) {
  return (
    <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <FontAwesomeIcon icon={solid('user-secret')} />
        <span class="font-semibold text-xl tracking-tight pl-4">Join a Side</span>
      </div>
      <div class="font-sans text-black">
        <div class="border rounded-full py-2 px-6 overflow-hidden flex bg-white">
          <input type="text" class="w-80" placeholder="Search..."/>
          <button class="flex items-center justify-center px-4 border-l">
            <svg class="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>
          </button>
        </div>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button> 
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="loat-left text-md lg:flex-grow">
          {/* <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
            Posts
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
            Profile
          </a> */}
        </div>
        
        <div class="pr-4">
          <a href="#" class="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Register</a>
        </div>
        <div>
          <a href="#" class="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Login</a>
        </div>
      </div>
    </nav>
  );
}