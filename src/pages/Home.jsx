import { useContext } from 'react';
import PostsContext from '../contexts/PostsContext'
import PostsList from '../components/posts/PostsList'

export default function Home() {

    const { posts } = useContext(PostsContext)

    return (
        <>
            <main>
                <div class="p-5 mb-4">
                    <div class="container-fluid py-5">
                        <div className="container vh-100">
                            <h1 class="display-1 fw-bold">This is our Blogpost 📝</h1>
                            <p class="col-md-8 fs-4">
                                Using a series of utilities, you can create this jumbotron, just
                                like the one in previous versions of Bootstrap. Check out the
                                examples below for how you can remix and restyle it to your liking.
                            </p>
                            <button class="btn btn-primary btn-lg" type="button">
                                Example button
                            </button>
                        </div>
                    </div>

                </div>
            </main>

            <section className="mb-3">
                <div className="container">
                    <h3>Latest Posts</h3>
                    <PostsList posts={posts.slice(0, 3)} />
                </div>
            </section>
        </>
    )
}