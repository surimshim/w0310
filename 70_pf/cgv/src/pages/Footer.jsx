import "@fortawesome/fontawesome-free/css/all.min.css";

import blogo from '../images/blogo.png';
import '../css/Footer.css'

export default function Footer() {
    return (
        <footer id='footer'>
            <div className='top'>
                <div>
                    <ul>
                        <li><a href="#">이용약관</a></li>
                        <li><a href="#">개인정보처리방침</a></li>
                        <li><a href="#">위치기반서비스 이용약관</a></li>
                        <li><a href="#">법적고지</a></li>
                        <li><a href="#">채용정보</a></li>
                    </ul>
                </div>
                <div>
                    <select name="fs" id="fs">
                        <option value="">계열사 바로가기</option>
                        <option value="1">CJ 주식회사</option>
                        <option value="2">CJ 제일제당</option>
                        <option value="3">CJ 푸드빌</option>
                        <option value="4">CJ 프레시웨이</option>
                        <option value="5">CJ CGV</option>
                    </select>
                </div>
            </div>
            
            <div className='bottom'>
                <div><a href="#"><img src={blogo} alt='하단 로고'></img></a></div>
                <div>
                    <p>
                        (04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동) 고객센터 : 1544-1122 호스팅사업자 : CJ올리브네트웍스
                    </p>
                    <p>
                        대표이사 : 정종민 대표이메일 : cjcgvmaster@cj.net 통신판매업신고번호 : 2017-서울용산-0662 사업자등록번호 : 104-81-45690
                    </p>
                    <p>
                        COPYRIGHT © CJ CGV Inc. All rights reserved.
                    </p>
                </div>
                <div>
                    <a href="#"><i class="fa-brands fa-youtube"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook"></i></a>
                    <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
}