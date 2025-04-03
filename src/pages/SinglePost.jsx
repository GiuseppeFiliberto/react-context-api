import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function SinglePost() {
    const { id } = useParams();

    const posts = [
        { id: 1, title: "Post One", textBody: "This is the body of post one." },
        { id: 2, title: "Post Two", textBody: "This is the body of post two." },
        { id: 3, title: "Post Three", textBody: "This is the body of post three." },
        { id: 4, title: "Post Four", textBody: "This is the body of post four." },
        { id: 5, title: "Post Five", textBody: "This is the body of post five." },
        { id: 6, title: "Post Six", textBody: "This is the body of post six." },
    ];

    const post = posts.find((post) => post.id === parseInt(id));

    const navigate = useNavigate()

    return (
        <>
            <main>
                <div className="container min-vh-100">
                    <div className="card-body p-5">
                        <h1 className="card-title fw-bold mb-5">{post.title}</h1>
                        <p className="card-text fw-bold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cupiditate, autem dicta eligendi minus animi consequuntur aspernatur accusamus nisi at sit impedit voluptate minima tempore porro! Ullam officia fugit aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam nostrum distinctio sit, illo repudiandae quaerat illum necessitatibus, consequatur velit exercitationem tempora aliquam ratione, itaque id porro nemo a fugit tempore. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas molestias ducimus labore aperiam ratione! Quaerat illum aspernatur magnam expedita blanditiis possimus tempora deleniti quibusdam placeat dicta doloribus quae delectus sed quam veritatis, sunt aliquam eaque laudantium, dolorem, voluptates quas. Quidem minus dolores fugiat perspiciatis blanditiis. Illo provident saepe nesciunt quibusdam soluta. Voluptas neque nemo, vitae nesciunt quaerat quod mollitia magnam quasi molestiae nisi temporibus doloremque facilis atque sed, cupiditate in iure. Amet sit, fugit sunt tempore distinctio recusandae porro molestias! Vero, dolores. Nam, temporibus voluptas. Veritatis delectus aliquam facere atque error. Consequuntur, quia exercitationem! Aliquid ut nisi qui tempore dicta.</p>

                        <div className="bts d-flex justify-content-between">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => navigate('/posts')}
                            >
                                <i className='bi bi-arrow-left-circle fw-bold fs-5'></i> <span className='fw-bold fs-5'>Go Back</span>
                            </button>

                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => navigate()}
                            >
                                <span className='fw-bold fs-5'>Next Post</span>  <i className='bi bi-arrow-right-circle fw-bold fs-5'></i>
                            </button>

                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}