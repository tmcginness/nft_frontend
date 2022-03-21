import { useState } from 'react'
import { render } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Collections from '../components/Collections';
import 'bootstrap/dist/css/bootstrap.min.css';




const Add = (props) => {


  let emptyNft = { ...props.nft }
  const [nft, setNft] = useState(emptyNft)
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setNft({ ...nft, [e.target.name]: e.target.value })
  }

  function AlertDismissible() {

    return (
      <>
        <Alert show={show} variant="success">
          <Alert.Heading>Success!</Alert.Heading>
          <p>
            Your NFT has been added! Check your profile, or Browse NFTS to see them all!
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close
            </Button>
          </div>
        </Alert>
      </>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.handleCreate(nft)
    setShow(true)
  }


  return (
    <>
      <h1 className='title'>Add To Your Collection Below!</h1>
      <Form className='addNFT' onSubmit={handleSubmit}>

        <Form.Label htmlFor='name'>Name:</Form.Label>
        <Form.Control type='text' required name='name' onChange={handleChange} value={nft.name} />


        <Form.Label htmlFor='image'>Image URL:</Form.Label>
        <Form.Control type='text' required name='image' onChange={handleChange} value={nft.image} />


        <Form.Label htmlFor='price'>Price:</Form.Label>
        <Form.Control type='number' required name='price' onChange={handleChange} value={nft.price} />


        <Form.Label htmlFor='description'>Description:</Form.Label>
        <Form.Control type='text' required name='description' onChange={handleChange} value={nft.description} />


        <Form.Label htmlFor='properties'>Properties:</Form.Label>
        <Form.Control type='text' required name='properties' onChange={handleChange} value={nft.properties} />

        <Form.Label htmlFor='owner'>Owner:</Form.Label>
        <Form.Control type='text' required name='owner' onChange={handleChange} value={nft.owner} />


        <Form.Label htmlFor='collections'>Collections:</Form.Label>
        <Form.Select
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
        </Form.Select>
        <Button className='addbtn' variant='success' type='submit'>Add NFT</Button>
      </Form>
      <AlertDismissible />
    </>
  )
}

export default Add

