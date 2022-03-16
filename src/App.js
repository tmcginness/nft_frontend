import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/AddNft'
import Edit from './components/EditNft'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';


const App = props => {

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
      <div className="container">
        <h1>Add a New NFT</h1>
        <Add handleCreate={handleCreate} />
        <div id="nfts">
          {nfts.map((nft) => {
            return (
              <Card style={{ width: '18rem' }}>
                <Card.Body>

                  <div className="nft" key={nft.id}>
                    <img src={nft.image} alt="" />

                    <Card.Title>Name: {nft.name}</Card.Title>

                    <Card.Subtitle><h5>Price: {nft.price}</h5></Card.Subtitle>
                    <p>Description: {nft.description}</p>
                    <p>Properties: [{nft.properties}]</p>
                    <Edit handleUpdate={handleUpdate} nft={nft} />
                    <button onClick={handleDelete} value={nft.id}>Delete</button>
                  </div>
                </Card.Body>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}


export default App
