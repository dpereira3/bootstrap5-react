import React, { useState, useEffect } from 'react'
import { API_BASE_URL, ACCESS_KEY } from '../config/constant'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function AllPosts() {

    const navigate = useNavigate()
    //Create a variable to store all posts and a set method to update the value of posts
    //useState hook helps us create this variable with empty array
    const [posts, setPosts] = useState([])
    const [loader, setLoader] = useState(false)
    const [photos, setPhotos] = useState([]);

    const [photoToPass, setPhotoToPass] = useState([]);

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

    //funcion para guardar la foto del post
    function handleViewDetails(photo) {
        // Guardar el objeto `photo` en `localStorage`
        if(localStorage.getItem('selectedPhoto') !== null) {
            localStorage.setItem('selectedPhoto', '');
        }
        localStorage.setItem('selectedPhoto', JSON.stringify(photo));
        //console.log(photo)
      }

    //we want to load data on page load of this component
    useEffect(() => {
        getAllPosts();
        //console.log("all posts loaded")
    }, []); //empty array means execute only once when component loads
  
    const fetchPhotos = async () => {
        //console.log(ACCESS_KEY);
        try {
            const response = await axios.get('https://api.unsplash.com/search/photos', {
                params: {
                    client_id: ACCESS_KEY, // Reemplaza con tu Access Key
                    query: 'house',
                    page: 1, // Cantidad de fotos a obtener
                    per_page: 100,
                    orientation: 'landscape'
                },
            });
        setPhotos(response.data);
        //console.log(response.data);
        //console.log(photos.results[1].urls.small);
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);
    
    return (
        <div>
            <section className="container pt-2">
                <h3 className="text-center text-uppercase py-4">All posts</h3>
                <div id="alertMsg"></div>
                <div className="row">
                    { 
                    loader ? 
                    <div className="container text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    : posts.map((post, index) => {
                        const photo = photos.results[index % photos.results.length]; // Ensure we have a photo for each post
                        //setPhotoToPass(photo)
                        return (
                            <div key={index} className="col-lg-4 col-md-4 col-sm-12 mb-2">
                                <div className="card">
                                    {photo && (
                                        <img 
                                            style={{ height: "300px" }} 
                                            src={photo.urls.small} 
                                            alt={photo.alt_description} 
                                            className="card-img-top" 
                                        />
                                    )}
                                    <div className="card-body">
                                        <h5 className="card-title">{post.title}</h5>
                                        <p className="card-text">{post.body}</p>
                                        <div className="d-grid">
                                            <Link to={{ pathname: `/posts/${post.id}/${post.userId}`, state: {photo} }} className="btn btn-primary"
                                             onClick={() => handleViewDetails(photo)}>
                                                <i className="fa-solid fa-location-arrow me-1"></i>Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
            </section>
        </div>
    )
}

export default AllPosts
