import Collections from './Collections'


import { useState } from 'react'

const Edit = (props) => {
    let emptyNft = { ...props.nft }
    const [nft, setnft] = useState(emptyNft)
    const [toggle1, setToggle1] = useState(false);
    const show = () => {
      setToggle1((prevState) => !prevState);
    }




    const handleChange = (event) => {
        setnft({ ...nft, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(nft)
    }

    return (
        <>
          <div className=' charDesc'style={{ height: toggle1 ? "100%" : "40px" }}>
            <button className="btn1" onClick={(event) => show()}>
              {toggle1 ? "Close Form" : "^  Edit  ^" }
            </button>
            <form className='formEdit' onSubmit={handleSubmit}>
              <div className='pair1'>
                <label htmlFor='name'>Name: </label>
                <input className="inputEdit" type='text' name='name' defaultValue={nft.name} onChange={handleChange} />
              </div>
              <div className='pair1'>
                <label htmlFor='price'>Price: </label>
                <input className="inputEdit" type='number' name='price' defaultValue={nft.price} onChange={handleChange} />
              </div>
              <div className='pair1'>
                <label htmlFor='properties'>Collections:</label>
                <select
                  name='collection'
                  className="input"
                  defaultValue={nft.collection}
                  onChange={handleChange}>
                  <option key="select-ANY" defaultValue={nft.collection}>
                    OTHER
                  </option>
                  {Collections.map((col) => (
                    <option key={"select-" + col} defaultValue={col}>
                      {col}
                    </option>
                  ))}
                </select>
              </div>
              <div className='pair1'>
                <label htmlFor='owner'>Owner: </label>
                <input className="inputEdit" type='text' name='owner' defaultValue={nft.owner} onChange={handleChange} />
              </div>
              <div className='pair1'>
                <label htmlFor='blockchain'>Blockchain: </label>
                <input className="inputEdit" type='text' name='blockchain' defaultValue={nft.blockchain} onChange={handleChange} />
              </div>
              <div className='pair1'>
                <label htmlFor='description'>Description: </label>
                <textarea className="inputEdit" type='text' name='description' defaultValue={nft.description} onChange={handleChange}></textarea>
              </div>
              <div className='pair1'>
                <label htmlFor='properties'>Properties: </label>
                <input className="inputEdit" type='text' name='properties' value={nft.properties} onChange={handleChange} />
              </div>
              <input className="btn2" type='submit' onClick={(event) => show()} />
            </form>
          </div>
        </>
    )
}

export default Edit
