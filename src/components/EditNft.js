import { useState } from 'react'

const Edit = (props) => {
    let emptyNft = { ...props.nft }
    const [nft, setnft] = useState(emptyNft)

    const handleChange = (event) => {
        setnft({ ...nft, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleUpdate(nft)
    }

    return (
        <>
            <details>
                <summary>Edit NFT</summary>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' value={nft.name} onChange={handleChange} />
                    <br />
                    <label htmlFor='price'>Price: </label>
                    <input type='number' name='price' value={nft.price} onChange={handleChange} />
                    <br />
                    <label htmlFor='description'>Description: </label>
                    <input type='text' name='description' value={nft.description} onChange={handleChange} />
                    <br />
                    <label htmlFor='properties'>Properties: </label>
                    <input type='text' name='properties' value={nft.properties} onChange={handleChange} />
                    <input type='submit' />
                </form>
            </details>
        </>
    )
}

export default Edit