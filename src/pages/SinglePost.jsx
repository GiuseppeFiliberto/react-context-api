import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react'

export default function SinglePost() {
    const { id } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts/${id}`)
            .then((response) => response.json())
            .then((data) => setPost(data))
            .catch((error) => console.error('Error fetching posts:', error));
    }, [id]);


    // const post = posts.find((post) => post.id === parseInt(id));

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="container min-vh-100">
                    <div className="card-body p-5">
                        <h1 className="card-title fw-bold mb-5">{post.title}</h1>
                        <p className="card-text fw-bold">{post.body}</p>

                        <div className="bts d-flex justify-content-between">

                            <Link to={`/posts/${post.id - 1}`} className="btn btn-primary">
                                <i className='bi bi-arrow-left-circle fw-bold fs-5'></i>
                                <span className='fw-bold fs-5'>Go Back</span>
                            </Link>

                            <Link to={`/posts/${post.id - 1}`} className="btn btn-primary">
                                <i className='bi bi-arrow-left-circle fw-bold fs-5'></i>
                                <span className='fw-bold fs-5'>Go Back</span>
                            </Link>




                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}