import React, { useState, useEffect } from 'react'
import { API_BASE_URL } from '../config/constant'
import { Link } from 'react-router-dom'

function AllPosts() {

    //Create a variable to store all posts and a set method to update the value of posts
    //useState hook helps us create this variable with empty array
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(false)

    //function getAllPosts() {}
    //ES6 function to get all posts from REST API
    const getAllPosts = () => {
        setLoader(true)
        fetch(`${API_BASE_URL}/posts`)
        .then((response) => response.json())
        .then((json) => {
            //console.log(json)
            setPosts(json)
            setLoader(false)
        });
    }

    //we want to load data on page load of this component
    useEffect(() => {
        getAllPosts();
        //console.log("all posts loaded")
    }, []); //empty array means execute only once when component loads

    return (
        <div>
            <section className="container pt-2">
                <h3 className="text-center text-uppercase py-4">All posts</h3>
                <div className="row">
                    { 
                    loader ? 
                    <div className="container text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : posts.map((post, index) => {
                            return <div key={index} className="col-lg-4 col-md-4 col-sm-12">
                                        <div className="card">
                                            <img src="https://source.unsplash.com/random/800x400?house" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{post.title}</h5>
                                                <p className="card-text">{post.body}</p>
                                                <div className="d-grid">
                                                    <Link to={`/posts/${post.id}/${post.userId}`} className="btn btn-primary">Read more</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </section>
        </div>
    )
}

export default AllPosts
