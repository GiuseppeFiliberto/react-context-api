export default function PostsLists() {

    return (
        <><div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3'>
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
        </>
    )
}