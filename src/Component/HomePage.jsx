/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';

export default function HomePage() {

    const [proData, setProData] = useState([]);

    const loading = async () => {
        await axios
            .get("http://localhost:8080/product", proData)
            .then((res) => setProData(res.data));
    }

    useEffect(() => {
        loading()
    }, []);

    const deleteData = async (id) => {
        await axios
            .delete("http://localhost:8080/product/" + id, proData)
        loading()
    }

    return (
        <div className='homepage'>
            <nav class="navbar navbar-light bg-light px-5 py-3">
                <h1 class="navbar-brand mb-0 ">Product</h1>
                <Link to={"/addpage"}><button className='btn btn-primary'>Add Product</button></Link>
            </nav>
            <table className='container table my-3'>
                <thead>
                    <tr >
                        <th>Sr.</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {proData.map((pro, i) =>
                        <tr key={i}>
                            <th>{i + 1}</th>
                            <td>{pro.name}</td>
                            <td>{pro.price}/-</td>
                            <td>
                                <img src={`http://localhost:8080/image/${pro.imgfile}`} alt={pro.imgfile} className='img-thumbnail' style={{ width: "75px", height: "75px", objectFit: "cover" }} />
                            </td>
                            <td className='action_btn'>
                                <Link to={"/viewpage/" + pro.id}><button className='btn btn-primary'>View</button></Link>
                                <Link to={"/editpage/" + pro.id}><button className='btn btn-outline-primary mx-2'>Edit</button></Link>
                                <button className='btn btn-danger' onClick={() => deleteData(pro.id)}>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
