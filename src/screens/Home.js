import React from 'react'
import './Home.css'

function Home() {
    return (
        <div>
            <section className="hero-section">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGhvdXNlfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhvdXNlfGVufDB8fDB8fHww" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section className="featured-posts container pt-2">
                <h3 className="text-center text-uppercase py-4">featured posts</h3>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <img src="https://media.istockphoto.com/id/1987087979/es/foto/nueva-vivienda-unifamiliar-sostenible-con-jard%C3%ADn.webp?b=1&s=170667a&w=0&k=20&c=HgbTkw2MT9SoIQPPSRJkczthA4-YA6oToVwVs_Dkpko=" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="latest-posts container pt-2">
                <h3 className="text-center text-uppercase py-4">latest posts</h3>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <img src="https://media.istockphoto.com/id/1987087979/es/foto/nueva-vivienda-unifamiliar-sostenible-con-jard%C3%ADn.webp?b=1&s=170667a&w=0&k=20&c=HgbTkw2MT9SoIQPPSRJkczthA4-YA6oToVwVs_Dkpko=" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="card">
                            <img src="https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvdXNlfGVufDB8fDB8fHww" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <div className="d-grid">
                                    <a href="#" className="btn btn-primary">Read more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="d-flex flex-column justify-content-center align-items-center container-fluid bg-primary bg-gradient mt-4" style={{ minHeight: "180px"}}>
                <i className="fs-1 text-white my-3 fa-solid fa-location-dot"></i>
                <h3 className="text-white text-center text-uppercase">We have wide variety of Posts</h3>
                <button className="btn btn-primary my-2 fs-5 fw-bold">View All Posts</button>
            </section>
            <section className="our-portfolio  container">
                <h3 className="text-center text-uppercase pt-4">our portfolio</h3>
                <div className="container text-center">
                    <div className="row g-1">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="p-3">
                            <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdXNlfGVufDB8fDB8fHww" />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="p-3">
                            <img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvdXNlfGVufDB8fDB8fHww" />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="p-3">
                            <img src="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGhvdXNlfGVufDB8fDB8fHww" />
                        </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="p-3">
                            <img src="https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fGhvdXNlfGVufDB8fDB8fHww" />
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
