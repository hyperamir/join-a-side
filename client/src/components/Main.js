import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import { Link } from 'react-router-dom'

import Banner from './art/Banner.png'
import ArtOne from './art/Art1.png'
import ArtTwo from './art/Art2.png'

export default function Comment(props) {
  return (
    <div>
      <img src={ Banner } />
        <div className="grid grid-cols-2 p-10 m-10">
          <div className="justify-center align-middle mt-10">
          <FontAwesomeIcon icon={solid('arrow-up')} />
          <p className="font-semibold">Pick a category above, and then join the conversation</p>
          </div>
          <img src={ ArtTwo } />
          <img src={ ArtOne } />
          <div className="justify-center align-middle mt-20">
            <p className="font-semibold">You have two things in mind, and can't decide on which one. </p>
              <Link to="/users" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-200 hover:text-white mr-4">
                <button className="bg-indigo-600 hover:bg-indigo-800 text-white font-bold mt-4 py-2 px-4 rounded-full">
                  Create a Question
                </button>
              </Link>
            </div>
        </div>
    </div>
  )
};