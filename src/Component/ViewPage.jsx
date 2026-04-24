/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

export default function ViewPage() {

    const { id } = useParams();
    const [proData, setProData] = useState("");

    const loading = async () => {
        await axios
            .get(`http://localhost:8080/product/${id}`, proData)
            .then((res) => setProData(res.data))
    }

    useEffect(() => {
        loading()
    }, []);

    return (
        <div className='viewpage d-flex flex-column align-items-center gap-5 m-5 '>
            <h3>Product Detail</h3>
            <img src={"http://localhost:8080/image/" + proData.imgfile} alt="img" className='img-thumbnail ' style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <div className='info'>
                <p>Name : {proData.name}</p>
                <p>Price : {proData.price}/-</p>
                <p>{proData.text}</p>
                <Link to={"/"}><button className='btn btn-primary '>Back to Home</button></Link>
            </div>
        </div>
    )
}
