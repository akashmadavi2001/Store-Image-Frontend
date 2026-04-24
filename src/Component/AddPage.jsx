import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import img from './box.png'

export default function AddPage() {

    let navigate = useNavigate();

    const [proData, setProData] = useState({
        name: "",
        price: "",
        text: "",
    });

    const { name, price, text } = proData;
    const [imgfile, setImgfile] = useState(null);
    const [prevImg, setPrevImg] = useState(img);

    const onchangeImg = (e) => {
        const imgfile = e.target.files[0];
        setImgfile(imgfile);

        const imgUrl = URL.createObjectURL(imgfile);
        setPrevImg(imgUrl);
    }

    const onchangeInput = (e) => {
        setProData({ ...proData, [e.target.name]: e.target.value })
    }

    const saveData = async () => {

        const formData = new FormData();
        formData.append("name", name);
        formData.append("text", text);
        formData.append("price", price);
        formData.append("imgfile", imgfile);

        await axios
            .post("http://localhost:8080/product", formData)
        navigate("/");
    }


    return (
        <div className='addpage '>
            <h1 className='text-center m-4'>Register</h1>
            <form action={() => saveData()} className='form m-5 p-5 '>
                <div class="mb-3">
                    <label for="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={name} onChange={(e) => onchangeInput(e)} placeholder="Enter product name" required />
                </div>
                <div class="mb-3">
                    <label for="price" className="form-label">Price</label>
                    <input type="number" className="form-control" id="price" name='price' value={price} onChange={(e) => onchangeInput(e)} placeholder="Enter price" required />
                </div>
                <div class="mb-3">
                    <label for="text" className="form-label">Description</label>
                    <input type="text" className="form-control" id="text" name='text' value={text} onChange={(e) => onchangeInput(e)} placeholder="Enter text" />
                </div>
                <div class="mb-3">
                    <label for="imgfile" className="form-label">Add Product Image</label>
                    <input type="file" className="form-control" id="imgfile" name='imgfile' onChange={(e) => onchangeImg(e)} required />
                </div>
                <img src={prevImg} alt={prevImg} className='img-thumbnail' style={{ width: "100px", height: "100px", objectFit: "cover" }} />
                <br />
                <br />
                <button className='btn btn-primary mx-2' type='submit'>Save</button>
                <Link to={"/"}><button className='btn btn-danger mx-2' type='cancel'>Cancel</button></Link>
            </form>
        </div>
    )
}
