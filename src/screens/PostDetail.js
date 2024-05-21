import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_BASE_URL } from '../config/constant'

function PostDetail() {

    const [title, setTitle] = useState({})
    const [body, setBody] = useState({})
    
    const [name, setName] = useState({})
    const [email, setEmail] = useState({})
    const [phone, setPhone] = useState({})
    const [website, setWebsite] = useState({})

    const getPostAndUser = () => {
        axios.get(`${API_BASE_URL}/posts/${postId}`)
        .then((postResponse)=>{
            const { id, title, body } = postResponse.data;
            setTitle(title)
            setBody(body)
            axios.get(`${API_BASE_URL}/users/${userId}`)
            .then((userResponse)=>{
                const { name, email, phone, website } = userResponse.data
                setName(name)
                setEmail(email)
                setPhone(phone)
                setWebsite(website)
                console.log(user)
            })
            .catch((err)=>{
                console.log(err)
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    //we want to load data on page load of this component
    useEffect(() => {
        getPostAndUser();
        //console.log("Post detail loaded")
    }, []); //empty array means execute only once when component loads

    const { postId, userId } = useParams();
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h3 className="text-center text-uppercase pt-4">Post Detail</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-9 col-lg-9 col-sm-12">
                    <div className="card mb-3">
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12">
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">An item</li>
                            <li className="list-group-item">A second item</li>
                            <li className="list-group-item">A third item</li>
                        </ul>
                        <div className="card-body">
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostDetail
