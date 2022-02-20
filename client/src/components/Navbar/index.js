import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import "./styles.scss";
import CategoryList from './CategoryList';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/categories').then((response) => {
      setCategories(response.data)
    }).catch(e => {
      console.log('error:', e)
    })
  }, [])

  // const parsedCategories = category.map(category => {
  //   return <CategoryList key={category.id} category= {category}/>
  // })

  return (
    <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">

      {/* Logo */}
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <FontAwesomeIcon icon={solid('user-secret')} />
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight pl-4">Join a Side</span>
        </Link>
      </div>

      {/* Categories Selector */}
      <div className="inline-block relative w-64 mr-8">

          <CategoryList categories={categories} />
  
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
        </div>
      </div>

      {/* Search Bar */}
      {/* <div className="font-sans text-black ml-8">
        <div className="border rounded-full py-2 px-6 overflow-hidden flex bg-white">
          <input type="text" className="w-60" placeholder="Search..." />
          <button className="flex items-center justify-center px-4 border-l">
            <svg className="h-4 w-4 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
          </button>
        </div>
      </div> */}

      {/* Mobile hamberger menu */}
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="loat-left text-md lg:flex-grow">

          {/* Links nav to route */}
          <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
              Create Posts
          </Link>

          {/* 
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
            Examples
          </a>
          <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white">
            Profile
          </a> */}
        </div>

        {/* Login && Register */}
        <div className="pr-4">
          <Link to="/signup">
            <span href="#" className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Register</span>
          </Link>
        </div>
        <div>
          <Link to="/login">
            <span href="#" className="inline-block text-md px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-white mt-4 lg:mt-0">Login</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}