
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Views/Home';
import Header from './Components/Header';
import Categories from './Views/Categories';
import Footer from './Components/Footer';

function App() {
    return (
        <div>
            <Router>
                <Header />
                <Routes>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                </Routes>
                <Footer />
            </Router>

        </div>
    );
}

export default App;
