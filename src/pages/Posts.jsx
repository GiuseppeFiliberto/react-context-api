import { Link } from 'react-router-dom'

export default function posts() {

    const posts = [
        { id: 1, title: "Post One", textBody: "This is the body of post one." },
        { id: 2, title: "Post Two", textBody: "This is the body of post two." },
        { id: 3, title: "Post Three", textBody: "This is the body of post three." },
        { id: 4, title: "Post Four", textBody: "This is the body of post four." },
        { id: 5, title: "Post Five", textBody: "This is the body of post five." },
        { id: 6, title: "Post Six", textBody: "This is the body of post six." },
    ];



    return (
        <>
            <div class="p-5 mb-4">
                <div class="container-fluid py-5 container">
                    <h1 class="display-1 fw-bold">Posts</h1>
                    <p class="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                </div>
            </div>
            <div className="container min-vh-100">
                <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3'>
                    {posts.map((post) => (
                        <div className="col" key={post.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title fw-bold">{post.title}</h2>
                                    <p className="card-text">{post.textBody}</p>
                                    <Link
                                        type="Link"
                                        class="btn btn-primary fs-5"
                                        to={`/singlepost/${post.id}`}
                                    >
                                        Read More
                                    </Link>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}