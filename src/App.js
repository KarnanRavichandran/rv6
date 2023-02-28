import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import NewBook from './pages/NewBook';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Contact />} />
    </Routes>
    <nav>
      <ul>
        <li>
           <Link to ="/" >Home</Link></li>
          <li> <Link to ="/book" >Book</Link></li>
        
      </ul>
    </nav>
  <Routes>
    <Route path="/" element={<Home />} />
     <Route path="/book/:id" element={<Book />} />
     <Route path="/newbook" element={<NewBook />} />
     <Route path="*" element={<NotFound />} />
       <p>test</p>
     <Route />
  </Routes>
  </>
  );
}

export default App;
