import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Movie from './pages/Movie';
import Ticket from './pages/Ticket';
import Theater from './pages/Theater';
import Event from './pages/Event';
import Shop from './pages/Shop';
import Location from './pages/Location';
import Notice from './pages/Notice';
import Faqs from './pages/Faqs';
import Search from './pages/Search';
import Login from './pages/Login';
import Join from './pages/Join';
import Cart from './pages/Cart';
import Footer from './pages/Footer';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Header />

                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/Movie" element={<Movie />} />
                    <Route path="/Ticket" element={<Ticket />} />
                    <Route path="/Theater" element={<Theater />} />
                    <Route path="/Event" element={<Event />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Location" element={<Location />} />
                    <Route path="/Notice" element={<Notice />} />
                    <Route path="/Faqs" element={<Faqs />} />
                    <Route path="/Search" element={<Search />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Join" element={<Join />} />
                    <Route path="/Cart" element={<Cart />} />
                </Routes>

                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
