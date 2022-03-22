import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Collections from '../components/Collections'
import { useNavigate } from "react-router-dom";

const Add = (props) => {
  const [nftImage, setNftImage] = useState('../dfNft.jpeg')
  let emptyNft = { ...props.nft }
  const [nft, setNft] = useState(emptyNft)
  let navigate = useNavigate();

  const handleChange = (e) => {
    setNft({ ...nft, [e.target.name]: e.target.value })

  }
  const handleImage = (event) => {
    setNftImage(event.target.value)
    setNft({ ...nft, [event.target.name]: event.target.value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreate(nft)
    navigate('/showNft')
  }
  return (
    <div className='addFormDiv'>
      <img className='addnftPre' src={nftImage} alt="" />
      <form className='formEdit' onSubmit={handleSubmit}>
        <div className='pairs'>
          <div className='pair1'>
            <label htmlFor='name'>Name:</label>
            <input required className="inputEdit" type='text' name='name' onChange={handleChange} defaultValue={nft.name} />
          </div>
          <div className='pair1'>
            <label htmlFor='image'>Image URL:</label>
            <input required className="inputEdit" type='text' name='image' onChange={handleImage} defaultValue={nft.image} />
          </div>
        </div>
        <div className='pairs'>
          <div className='pair1'>
            <label htmlFor='price'>Price:</label>
            <input required className="inputEdit" type='number' name='price' onChange={handleChange} defaultValue={nft.price} />
          </div>
          <div className='pair1'>
            <label htmlFor='description'>Description:</label>
            <input required className="inputEdit" type='text' name='description' onChange={handleChange} defaultValue={nft.description} />
          </div>
        </div>
        <div className='pairs'>
          <div className='pair1'>
            <label htmlFor='properties'>Properties:</label>
            <input required className="inputEdit" type='text' name='properties' onChange={handleChange} defaultValue={nft.properties} />
          </div>
          <div className='pair1'>
            <label htmlFor='description'>Owner:</label>
            <input required className="inputEdit" type='text' name='owner' onChange={handleChange} defaultValue={nft.owner} />
          </div>
        </div>
        <div className='pair1'>
          <label htmlFor='properties'>Collections:</label>
          <select
            name='collection'
            className="inputEdit"
            defaultValue={nft.collection}
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
        <button className='btn1' type='submit'>Add NFT</button>
      </form>
    </div>
  )
}
export default Add
