// DO NOT DELETE

import './App.css'
import { useState } from 'react'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_2259.jpg',
  )

  const handleClick = newUrl => () => {
    setDogUrl(newUrl)
  }

  return (
    <div>
      <header>Dogアプリ</header>
      <img src={dogUrl} alt="dog" />
      <button
        onClick={handleClick(
          'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
        )}
      >
        更新
      </button>
    </div>
  )
}
