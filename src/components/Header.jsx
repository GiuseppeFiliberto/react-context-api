import { NavLink } from 'react-router-dom';
export default function Header() {
    const menu = [
        { id: 1, path: '/', text: 'Home' },
        { id: 2, path: '/Posts', text: 'Posts' },
        { id: 3, path: '/About', text: 'About Us' },
    ];

    return (
        <>
            <header className="">
                <nav className="navbar navbar-expand-sm navbar-ligh prp-primary">
                    <div className="container">
                        <NavLink className="nav-link navbar-brand" to='/'>

                            <i className="bi bi-blockquote-left"></i> BlogPosts
                        </NavLink>
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                                {menu.map((item) => (
                                    <li key={item.id} className="nav-item">
                                        <NavLink className="nav-link fw-bold" to={item.path}>
                                            {item.text}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}