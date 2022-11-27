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
            <h3 class="text-lg font-bold"> Add a new Product</h3>
            <br /><br />
            <form onSubmit={handleAddProduct}>
                    Input the Product Catagory: 
                    <input onBlur={handleInputBlur} type="text" name="catagory" placeholder='HP/Dell/Acer' required/>
                    <br/><br />
                    Input the Product Name: 
                    <input onBlur={handleInputBlur} type="text" name="name" placeholder='Product Name' required/>
                    <br/><br />
                    Input the Product Price: 
                    <input onBlur={handleInputBlur} type="text" name="price" placeholder='Product Price' required/>
                    <br/><br />:
                    Input the Product picture's URL: 
                    <input onBlur={handleInputBlur} type="text" name="pic" placeholder='Product picture url' required/>
                    <br/><br />
                    Input the Product Condition:
                    <input onBlur={handleInputBlur} type="text" name="condition" placeholder='excellent, good, fair' required/>
                    <br/><br />
                    Input the Product Description: 
                    <input onBlur={handleInputBlur} type="text" name="description" placeholder='Product Description' required/>
                    <br /><br />
                    Input the Contuct Number: 
                    <input onBlur={handleInputBlur} type="text" name="mobile" placeholder='017....' required/>
                    <br/><br />
                    Input the Location: 
                    <input onBlur={handleInputBlur} type="text" name="location" placeholder='Chittagong, Dhaka, etc.' required/>
                    <br/><br />
                    <button type="submit" className="btn btn-sm">Add Product</button>
                    <br /><br />
            </form>
        </div>
    );
};

export default AddProduct;