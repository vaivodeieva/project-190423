
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Views/Home.js';
import Header from './Components/Header';
import Categories from './Views/Categories';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/" element={<Categories />} />
                </Routes>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
