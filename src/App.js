import { useState, useEffect } from 'react'
import axios from 'axios'
import Add from './components/AddNft'
import Edit from './components/EditNft'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Card from 'react-bootstrap/Card';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { EditNft } from "./pages/EditNft";
import { Profile } from "./pages/Profile";
import { AddNft } from "./pages/AddNft";
import { ShowNft } from "./pages/Show";
import { NavBar } from "./components/NavBar";


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
    <BrowserRouter>
      <header className='header'>
        <NavBar />
      </header>
      <div className="container1">
        <Routes>
          <Route exact path="/showNft" element={<ShowNft />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/addNft" element={<AddNft />} />
          <Route exact path="/editNft" element={<EditNft />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
        </BrowserRouter>
    </>
  )
}


export default App
