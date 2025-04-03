import PostsCard from '../components/posts/PostsCard'

export default function posts() {





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