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

  async function handleClick() {
    try {
      const res = await fetch('https://dog.ceo/api/breeds/image/random')

      if (!res.ok) {
        throw new Error(`HTTPエラー: ${res.status}`)
      }

      const json = await res.json()
      setDogUrl(json.message)
    } catch (error) {
      console.error('通信に失敗しました:', error)
    }
  }

  return (
    <div>
      <header className="header">Dogアプリ</header>
      <img src={dogUrl} alt="dog" />
      <button
        onClick={() =>
          handleClick(
            'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
          )
        }
      >
        更新
      </button>
    </div>
  )
}
