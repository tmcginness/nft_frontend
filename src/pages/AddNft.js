import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Collections from '../components/Collections'




const Add = (props) => {


  let emptyNft = { ...props.nft }
  const [nft, setNft] = useState(emptyNft)

  const handleChange = (e) => {
    setNft({ ...nft, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreate(nft)
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='pair1'>
          <label htmlFor='name'>Name:</label>
          <input type='text' name='name' onChange={handleChange} value={nft.name} />
        </div>
        <div className='pair1'>
          <label htmlFor='image'>Image URL:</label>
          <input type='text' name='image' onChange={handleChange} value={nft.image} />
        </div>
        <div className='pair1'>
          <label htmlFor='price'>Price:</label>
          <input type='number' name='price' onChange={handleChange} value={nft.price} />
        </div>
        <div className='pair1'>
          <label htmlFor='description'>Description:</label>
          <input type='text' name='description' onChange={handleChange} value={nft.description} />
        </div>
        <div className='pair1'>
          <label htmlFor='properties'>Properties:</label>
          <input type='text' name='properties' onChange={handleChange} value={nft.properties} />

        </div>
        <div className='pair1'>
          <label htmlFor='owner'>Owner:</label>
          <input type='text' name='owner' onChange={handleChange} value={nft.owner} />
        </div>
        <div className='pair1'>
          <label htmlFor='collections'>Collections:</label>
          <select
            className="input"
            value={nft.collection}
            onChange={handleChange}>
            <option key="select-ANY" value="other">
              OTHER
            </option>
            {Collections.map((col) => (
              <option key={"select-" + col} value={col}>
                {col}
              </option>
            ))}
          </select>
        </div>
        <button type='submit'>Add NFT</button>
      </form>
    </>
  )
}

export default Add

