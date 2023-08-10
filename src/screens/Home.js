import { Col, Row } from 'react-bootstrap';
import Banner from '../components/Banner';
import '../styles/Home.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        fetch('http://localhost:9999/Post')
            .then(resp => resp.json())
            .then(data => {
                setPosts(data);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);

    const nextPost = () => {
        setCurrent(current => (current + 1) % posts.length);
    }

    const prevPost = () => {
        setCurrent(current => (current - 1 + posts.length) % posts.length);
    }

    if (!posts || posts.length === 0) {
        return <div>Loading...</div>;
    }

    const getNextPosts = (current) => {
        let postsToShow = [];

        for (let i = 0; i < 3; i++) {
            const index = (current + i) % posts.length;
            postsToShow.push(posts[index]);
        }

        return postsToShow;
    };

    const services = [
        {
            title: "Affordable Prices",
            description: "We provide some very affordable prices compared to others.",
            icon: "/img/wallet.png"
        },
        {
            title: "Unforgettable Experience",
            description: "We provide a vacation experience that will be unforgettable.",
            icon: "/img/user.png"
        },
        {
            title: "Very Friendly Service",
            description: "We will provide excellent and friendly service for the sake of our customers.",
            icon: "/img/heart.png"
        },
    ];

    return (
        <div>
            <Banner />
            <div className="home">
                <div className="left-side">
                    <h1>Get Experience <br />Which are fun</h1>
                    <p>With travala you can get the best experience on holiday travel, and we always update the latest and best destinations in the world</p>
                    <img src="/img/explore.png" alt="Experience" />
                </div>
                <div className="right-side">
                    {services.map((service, index) => (
                        <div className="icon-text-container" key={index}>
                            <div className="icon-container">
                                <img src={service.icon} alt={service.title} />
                            </div>
                            <div className="text-container">
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="home">
                <button className="airline-button" style={{ backgroundImage: 'url("/img/image-27.png")' }}></button>
                <button className="airline-button" style={{ backgroundImage: 'url("/img/image-28.png")' }}></button>
                <button className="airline-button" style={{ backgroundImage: 'url("/img/image-29.png")' }}></button>
                <button className="airline-button" style={{ backgroundImage: 'url("/img/image-30.png")' }}></button>
                <button className="airline-button" style={{ backgroundImage: 'url("/img/image-31.png")' }}></button>
            </div>

            <div className="home">
                <div className="left-side">
                    <h1 style={{ width: '332px' }}>Destinations <br />Most Popular</h1>
                </div>
                <div className="mid-content">Some of the most popular destinations for <br />
                    you visit with a view the beautiful one.
                </div>
                <div className="circle-button">
                    <button className="circle-button-white" onClick={prevPost}>
                        <img src="/img/arrowleft.png" alt="arrow" />
                    </button>
                </div>
                <div className="circle-button" style={{ marginLeft: '12px' }}>
                    <button className="circle-button-black" onClick={nextPost}>
                        <img src="/img/arrowright.png" alt="arrow" />
                    </button>
                </div>
            </div>

            <div className="home">
                <div className='post-container'>
                    {getNextPosts(current).map((post, index) => (
                        <div key={post.id} className={`card ${index === 1 ? "card-middle" : ""}`} style={{ borderRadius: '30px', border: 'none' }}>
                            {/* <div key={post.id} className={`card ${(clicks <= 1 && index === clicks) ? "card-middle" : ((clicks > 1 && index === 1) ? "card-middle" : "")}`} style={{ borderRadius: '30px', border: 'none'}}> */}
                            <img src={post.postImg} alt={post.name} />
                            <div className="card-content">
                                <h2>{post.name}</h2>
                                <p>{post.content}</p>
                                <div className="card-footer" style={{ borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px', border: 'none' }}>
                                    <p>Price: <span>$ {post.price}</span>/Person</p>
                                    <Link to="/booking">
                                        <button>Book Ticket</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="banner" style={{ height: '598px' }}>
                <div className="banner-text">
                    <h1 className="banner-text-large-2">
                        We are ready to 
                        provide the best 
                        trip for you
                    </h1>
                    <p className="content-2">
                        We have a variety of the world's best destinations that you
                        can choose as your trip destination
                    </p>
                    <Link to="/about">
                        <button className="destination-button">
                            Contact Now
                            <span className="destination-button-arrow"><img src="/img/Continue.png" alt="arrow" style={{ width: '24px', height: '24px' }} /></span>
                        </button>
                    </Link>
                </div>
                <div className="banner-image">
                    <img src="/img/boat.png" alt="Banner" style={{margin:'30px 0px 0px 70px'}}/>
                </div>
            </div>
        </div>
    )
}