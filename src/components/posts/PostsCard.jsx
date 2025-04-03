import PostsList from "./PostsList";
import { useContext } from "react";
import PostsContext from '../../contexts/PostsContext';

export default function PostsCard() {

    const { posts } = useContext(PostsContext)

    return (
        <>
            <section>
                <div className="container min-vh-100">
                    <PostsList posts={posts} />
                </div>
            </section>
        </>
    )
}