import { useState } from 'react'
import '../css/MainPage.css'

// 구조 분해 할당
function MovieCard({ rank, image, alt, title, rate, age, audience, isLiked, onLike }) {
    return (
        <div className="movie-card">
            {/* 이미지 */}
            <a href="#" className="poster" onClick={(e) => {
                e.preventDefault();
            }}><img src={image} alt={alt}></img></a>

            {/* 영화순위 */}
            <div className="rank">{rank}</div>

            <a href="#"
                className={`heart ${isLiked ? "liked" : ""}`}
                onClick={(e) => {
                    e.preventDefault();
                    onLike();
                }}
            >
                <i className="fa-solid fa-heart"></i>
            </a>

            {/* 제목 */}
            <div className="movie-title">
                <h3>{title}</h3>
                <span className={`age-${age}`}>{age}</span>
            </div>

            {/* 예매율, 관객 수 */}
            <div className="desc">
                <span>예매율 {rate}</span>
                <span>{audience}</span>
            </div>

            {/* 예매하기 버튼 */}
            <a href="#" className="book-btn"
                onClick={(e) => { e.preventDefault(); }}>예매하기</a>

        </div>
    )
}

export default function MainPage() {
    const [likedMovies, setLikedMovies] = useState([]);

    const toggleLike = (rank) => {
        setLikedMovies((prev) =>
            prev.includes(rank)
                ? prev.filter((id) => id !== rank)
                : [...prev, rank]
        );
    };

    const movies = [
        {
            rank: 1,
            image: "https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89833/89833_320.jpg",
            title: "극장판 귀멸의 칼날: 무한성편",
            rate: "51%",
            age: 15,
            audience: "2025.08.22 개봉"
        },
        {
            rank: 2,
            image: "https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89706/89706_320.jpg",
            title: "F1 더 무비",
            rate: "10.1%",
            age: 12,
            audience: "누적 364.3만"
        },
        {
            rank: 3,
            image: "https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89676/89676_320.jpg",
            title: "좀비딸",
            rate: "10.3%",
            age: 12,
            audience: "누적 335.1만"
        },
        {
            rank: 4,
            image: "https://cdn.cgv.co.kr/cgvpomsfilm/Movie/Thumbnail/Poster/000089/89826/89826_320.jpg",
            title: "악마가 이사왔다",
            rate: "51%",
            age: 12,
            audience: "2025.08.13 개봉"
        }
    ];

    return (
        <div>
            <ul className='menu'>
                <li>
                    <a href="#" className='active' >무비차트</a>
                </li>
                <li>
                    <a href="#">현재상영작</a>
                </li>
                <li>
                    <a href="#">상영예정</a>
                </li>
            </ul>

            <div className="moviechart">
                {/* 리스트 렌더링
                    {배열.map((element) => {return 값;})}
                    {배열.map((element) => 값;)}
                */}

                {movies.map((movie) => {
                    return (
                        <MovieCard
                            key={movie.rank}
                            rank={movie.rank}
                            image={movie.image}
                            alt={movie.title}
                            title={movie.title}
                            rate={movie.rate}
                            age={movie.age}
                            audience={movie.audience}
                            isLiked={likedMovies.includes(movie.rank)}
                            onLike={() => toggleLike(movie.rank)}
                        />
                    );
                })}
            </div>
        </div>
    );
}