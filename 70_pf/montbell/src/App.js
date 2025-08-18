import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import logo from './images/logo.svg';
import "@fortawesome/free-solid-svg-icons";

import MainPage from './pages/MainPage';
import Best from './pages/Best';
import Men from './pages/Men';
import Women from './pages/Women';
import Kids from './pages/Kids';
import Sale from './pages/Sale';
import Location from './pages/Location';
import Notice from './pages/Notice';
import Faqs from './pages/Faqs';
import Event from './pages/Event';
import Search from './pages/Search';
import Login from './pages/Login';
import Join from './pages/Join';
import Cart from './pages/Cart';

import './css/Header.css';

function App() {
  return (
    <BrowserRouter>
      <header id='header'>
        <div>
          <ul className='TopMenu'>
            <li><Link to="/Location">매장찾기</Link></li>
            <li><Link to="/Notice">공지사항</Link></li>
            <li><Link to="/Faqs">FAQs</Link></li>
            <li><Link to="/Event">이벤트</Link></li>
          </ul>
        </div>
        <div className="gnb">
          <div>
            <h1>
              <Link to="/" className='gnb_link'><img src={logo} alt="로고"></img></Link>
            </h1>
            <ul className='Main'>
              <li><Link to="/Best">Best</Link></li>
              <li><Link to="/Men">Men</Link></li>
              <li><Link to="/Women">Women</Link></li>
              <li><Link to="/Kids">Kids</Link></li>
              <li className='Sale'><Link to="/Sale">Sale</Link></li>
            </ul>
          </div>
          <ul className='SideMenu'>
            <li><Link to="/Search"><i class="fa-solid fa-magnifying-glass"></i></Link></li>
            <li className='Login'><Link to="/Login"><i class="fa-solid fa-circle-user"></i>로그인</Link></li>
            <li className='Join'><Link to="/Join">회원가입</Link></li>
            <li><Link to="/Cart"><i class="fa-solid fa-cart-shopping"></i></Link></li>
          </ul>
          
        </div>
      </header>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Best" element={<Best />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Sale" element={<Sale />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/Notice" element={<Notice />} />
        <Route path="/Faqs" element={<Faqs />} />
        <Route path="/Event" element={<Event />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Join" element={<Join />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
