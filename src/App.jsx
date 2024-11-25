import { useState } from "react";
import "./App.css";
import data from "./assets/data/movie.json";

function App() {
  const [likeMovie, setLikeMovie] = useState([]);

  const [counter, setCounter] = useState(0);


  function handleClickLike(movieId) {
    setLikeMovie((movie) => {
      if (movie.includes(movieId)) {
        setCounter(counter - 1);
        return movie.filter((id) => id !== movieId);
      } else {
        setCounter(counter + 1);
        return [...movie, movieId];
      }
    });
  }

  return (
    <>
      <header className="header">
        <div className="container header__container">
          <a className="logo-link" href="#">
            🎬
            Kino Ro'yhati
          </a>
          <nav className="sitenav">
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  Bosh sahifa
                </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  Kinolar
                </a>
              </li>
              <li className="sitenav__item">
                <a className="sitenav__link" href="#">
                  Yangiliklar
                </a>
              </li>
            </ul>
          </nav>
          <div className="likes">
            <i className="fa-regular fa-heart"></i>
            <span className="likes__text">{counter} likes</span>
          </div>
        </div>
      </header>
      <main className="main">
        <section className="movie">
          <div className="movie__wrapper container">
            {data.map((movie) => (
              <div key={movie.id} className="movie__card">
                <div className="movie__wrap">
                  <img
                    className="movie__pic"
                    src={movie.Images?.[1] || "https://picsum.photos/200/300"}
                    alt={`Image of ${movie.Title}`}
                  />
                    <div className="movie__like">
                    <i
                      onClick={() => handleClickLike(movie.id)}
                      className={`fa-heart ${
                        likeMovie.includes(movie.id)
                          ? "fa-solid liked"
                          : "fa-regular"
                      }`}
                    ></i>
                  </div>
                </div>
                <div className="movie__info">
                  <h2 className="movie__title">{movie.Title}</h2>
                  <p className="movie__desc">{movie.Plot}</p>
                  <div className="movie__card-content">
                    <div>
                      <span>Yil:</span> {movie.Year}
                    </div>
                    <div>
                      <span>Reyting:</span> {movie.Rated}
                    </div>
                    <div>
                      <span>Chiqarilgan sana:</span> {movie.Released}
                    </div>
                    <div>
                      <span>Davomiyligi:</span> {movie.Runtime}
                    </div>
                    <div>
                      <span>Janr:</span> {movie.Genre}
                    </div>
                    <div>
                      <span>Rejissor:</span> {movie.Director}
                    </div>
                    <div>
                      <span>Yozuvchi:</span> {movie.Writer}
                    </div>
                    <div>
                      <span>Aktyorlar:</span> {movie.Actors}
                    </div>
                    <div>
                      <span>Til:</span> {movie.Language}
                    </div>
                    <div>
                      <span>Mamlakat:</span> {movie.Country}
                    </div>
                    <div>
                      <span>Mukofotlar:</span> {movie.Awards}
                    </div>
                    <div>
                      <span>IMDb reytingi:</span> {movie.imdbRating}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
