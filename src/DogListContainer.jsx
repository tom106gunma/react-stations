// @ts-check
import { useState, useEffect } from 'react'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({})
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(res => res.json())
      .then(data => {
        setBreeds(data.message)
      })
      .catch(error => {
        console.error('Error fetching breeds:', error)
      })
  }, [])
  return (
    <div>
      <select name="pets" id="pet-select">
        <option value="">--1 つ選択してください--</option>
        {Object.entries(breeds).map(([breed, subs]) => (
          <option key={breed} value={breed}>
            {breed} - {subs.join(', ')}
          </option>
        ))}
      </select>
      <button>取得</button>
    </div>
  )
}

export default DogListContainer
