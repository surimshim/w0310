import {useState} from 'react'
import './css/App.css'



// 구조 분해 할당
function MovieCard({rank, image, alt, initialLikes}) {
  const [likes, setLikes] = useState(initialLikes);
  
  const handleLike = () => setLikes(likes + 1);

  return (
    <div className="movie-card">
      {/* 영화순위 */}
      <div className="rank">{rank}</div>

      {/* 이미지 */}
      <a href="#"><img src={image} alt={alt}></img></a>

      <div className="likes-btn">
        {/* 좋아요 */}
        <button className="likes" onClick={handleLike}>♡{likes}</button>

        {/* 예매버튼 */}
        <a href="#">예매</a>
      </div>
    </div>
  )
}

function App() {
  const movies = [
    {
      rank: 1,
      image: "https://img.megabox.co.kr/SharedImg/2025/07/25/4fLIzM7kJAnaPCu4ngQJLhgP7ak3GMrs_420.jpg",
      alt: "귀멸의 칼날",
      likes: 3400
    },
    {
      rank: 2,
      image: "https://img.megabox.co.kr/SharedImg/2025/08/05/GCFwvyXNbZTEogfoCW4TQNLiBNc5l6Hy_420.jpg",
      alt: "좀비딸",
      likes: 1000
    },
    {
      rank: 3,
      image: "https://img.megabox.co.kr/SharedImg/2025/07/21/PyQHev3OAVz7SGjIbnc6hGIA7GHmqq8g_420.jpg",
      alt: "악마가 이사왔다",
      likes: 328
    },
    {
      rank: 4,
      image: "https://img.megabox.co.kr/SharedImg/2025/07/25/xW9c9qjuflwzzoHf6PPnfWOE5cAF4v4j_420.jpg",
      alt: "머티리얼리스트",
      likes: 1000
    }
  ];

  return (
    <div>
      <h2>박스오피스</h2>
      <div className="boxoffice">
        {/* 리스트 렌더링
              {배열.map((element) => {return 값;})}
              {배열.map((element) => 값;)}
        */}

        {movies.map((movie) => {
          return (
            <MovieCard
              key = {movie.rank}
              rank = {movie.rank}
              image = {movie.image}
              alt = {movie.alt}
              initialLikes = {movie.likes}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;