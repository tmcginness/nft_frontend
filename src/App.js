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
import { Profile } from "./pages/Profile";
import { AddNft } from "./pages/AddNft";
import ShowNft from "./pages/Show";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { UserPage } from "./pages/UserPage";
import { NavBar } from "./components/NavBar";
import { UserProvider } from './Contexts/UserContext'



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

    <div className='mainDiv'>
      <UserProvider>
        <BrowserRouter>
          <header className='header'>
            <NavBar />
          </header>
          <div className="container1">
            <Routes>

              <Route exact path="/register" element={<Register />} />
              <Route exact path="/showNft" element={<ShowNft nft={nfts} setNfts={setNfts} />} />
              <Route exact path="/userPage" element={<UserPage />} />
              <Route exact path="/profile" element={<Profile />} />

              <Route exact path="/addNft" element={<AddNft />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}


export default App
