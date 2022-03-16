import Add from '../components/AddNft'
import Edit from '../components/EditNft'
import axios from 'axios'
import { useState, useEffect } from 'react'



export const AddNft = () => {

const [nfts, setNfts] = useState([])
  const getNfts = () => {
    axios.get('https://boiling-island-41564.herokuapp.com/api/nfts')
      .then(
        (response) => setNfts(response.data),
        (error) => console.error(error))
      .catch()

  }

  const handleCreate = (addNft) => {
    axios.post('https://boiling-island-41564.herokuapp.com/api/nfts', addNft)
      .then((response) => {
        console.log(response);
        setNfts([...nfts, response.data])
      })
  }

  const handleDelete = (e) => {
    axios.delete('https://boiling-island-41564.herokuapp.com/api/nfts/' + e.target.value)
      .then((response) => {
        getNfts()
      })
  }

  const handleUpdate = (editNft) => {
    axios.put('https://boiling-island-41564.herokuapp.com/api/nfts/' + editNft.id, editNft)
      .then((response) => {
        setNfts(nfts.map((nft) => {
          return nft.id !== editNft.id ? nft : editNft
        }))
      })
  }

  useEffect(() => {
    getNfts()
  }, [])

  return (
    <>
    <h1>Add</h1>
    <div >
      <Add handleCreate={handleCreate} />
      {nfts.map((nft) => {
        return (

          <div key={nft.id} style={{ width: '18rem' }}>
            <div>

              <div className="nft" >
                <img src={nft.image} alt="" />

                <div>Name: {nft.name}</div>

                <div><h5>Price: {nft.price}</h5></div>
                <p>Description: {nft.description}</p>
                <p>Properties: [{nft.properties}]</p>
                <Edit handleUpdate={handleUpdate} nft={nft} />
                <button onClick={handleDelete} value={nft.id}>Delete</button>
              </div>
            </div>
          </div>
        )
      })}
    </div>
    </>
  )
};
