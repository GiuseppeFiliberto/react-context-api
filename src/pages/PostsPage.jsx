import { Link } from 'react-router-dom'
import PostsCard from '../components/posts/PostsCard'

export default function posts() {

    // const posts = [
    //     { id: 1, title: "Post One", textBody: "This is the body of post one." },
    //     { id: 2, title: "Post Two", textBody: "This is the body of post two." },
    //     { id: 3, title: "Post Three", textBody: "This is the body of post three." },
    //     { id: 4, title: "Post Four", textBody: "This is the body of post four." },
    //     { id: 5, title: "Post Five", textBody: "This is the body of post five." },
    //     { id: 6, title: "Post Six", textBody: "This is the body of post six." },
    // ];



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

            <PostsCard />
        </>
    );
}