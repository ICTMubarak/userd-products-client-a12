import React, { useState } from 'react';

const AddProduct = () => {

    const [product, setProduct] = useState({});



    const handleAddProduct = event =>{
        event.preventDefault();
        fetch('http://localhost:5000/addproduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                window.alert('data insert successfully');
                event.target.reset();
            }
        })

    }


    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newProduct = {...product}
        newProduct[field] = value;
        setProduct(newProduct);
        
    }



    return (
        <div>
            <h3>Please add a new Product</h3>
            <br /><br />
            <form onSubmit={handleAddProduct}>
                    <input onBlur={handleInputBlur} type="text" name="name" placeholder='Product Name' />
                    <br/><br />
                    <input onBlur={handleInputBlur} type="text" name="price" placeholder='Product Price' />
                    <br/><br />
                    <input onBlur={handleInputBlur} type="text" name="pic" placeholder='Product picture url' />
                    <br/><br />
                    <input onBlur={handleInputBlur} type="text" name="condition" placeholder='Product Condition' />
                    <br/><br />
                    <input onBlur={handleInputBlur} type="text" name="description" placeholder='Product Description' />
                    <br /><br />
                    <input onBlur={handleInputBlur} type="text" name="mobile" placeholder='Contuct Number' />
                    <br/><br />
                    <input onBlur={handleInputBlur} type="text" name="location" placeholder='Location' />
                    <br/><br />
                    <button type="submit" className="btn btn-sm">Add Product</button>
                    <br /><br />
            </form>
        </div>
    );
};

export default AddProduct;