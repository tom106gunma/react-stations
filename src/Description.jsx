// @ts-check
import { useState } from 'react'
import DogImage from './DogImage'
export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_2259.jpg',
  )

  async function handleClick() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(data => {
        setDogUrl(data.message)
      })
      .catch(error => {
        console.error('Error fetching DogUrl:', error)
      })
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
