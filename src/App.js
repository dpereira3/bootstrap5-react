import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './screens/About';
import Contact from './screens/Contact';
import Home from './screens/Home';
import Footer from './components/Footer';
import AllPosts from './screens/AllPosts';
import PostDetail from './screens/PostDetail';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/posts" element={<AllPosts />}></Route>
          <Route exact path="/posts/:postId/:userId" element={<PostDetail />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
