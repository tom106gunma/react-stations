// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'
export const Description = () => {
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
    <div className="container">
      <div className="caption">
        <p>犬の画像を表示するアプリです。</p>
      </div>
      <div className="dog-image">
        <DogImage imageUrl={dogUrl} />
        <button onClick={() => handleClick()}>更新</button>
      </div>
    </div>
  )
}

export default Description
