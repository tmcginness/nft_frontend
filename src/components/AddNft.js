import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



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
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formAddNft">

                    <Form.Label htmlFor='name'>Name:</Form.Label>
                    <Form.Control type='text' name='name' onChange={handleChange} value={nft.name} />
                    <br />
                    <Form.Label htmlFor='price'>Price:</Form.Label>
                    <Form.Control type='number' name='price' onChange={handleChange} value={nft.price} />
                    <br />
                    <Form.Label htmlFor='description'>Description:</Form.Label>
                    <Form.Control type='text' name='description' onChange={handleChange} value={nft.description} />
                    <br />
                    <Form.Label htmlFor='properties'>Properties:</Form.Label>
                    <Form.Control type='text' name='properties' onChange={handleChange} value={nft.properties} />
                    <br />


                    <Button type='submit'>Add NFT</Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default Add