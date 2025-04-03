import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Posts from './pages/Posts/PostsPage'
import SinglePost from './pages/SinglePost'
import About from './pages/About'

function App() {

  const [posts, setPsts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path='/' Component={Home} />
            <Route path='/posts' Component={Posts} />
            <Route path='/about' Component={About} />
            <Route path='/singlepost/:id' Component={SinglePost} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
