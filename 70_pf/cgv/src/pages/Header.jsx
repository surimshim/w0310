import { Link } from 'react-router-dom';

import logo from '../images/logo.png';
import '../css/Header.css'

export default function Header() {
  return (
      <header id='header'>
        <div className="gnb">
          <div>
            <h1>
              <Link to="/" className='gnb_link'><img src={logo} alt="로고"></img></Link>
            </h1>
            <ul className='Main'>
              <li><Link to="/Movie">영화</Link></li>
              <li><Link to="/Ticket">예매</Link></li>
              <li><Link to="/Theater">극장</Link></li>
              <li><Link to="/Event">이벤트/혜택</Link></li>
              <li><Link to="/Shop">매점</Link></li>
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
  );
}