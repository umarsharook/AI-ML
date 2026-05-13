const movies = [
  {
    title: "Stranger Things",
    description: "A group of kids uncover supernatural mysteries in their small town.",
    image: "https://image.tmdb.org/t/p/w500/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
  },
  {
    title: "Breaking Bad",
    description: "A chemistry teacher turns drug kingpin to secure his family's future.",
    image: "https://image.tmdb.org/t/p/w500/tDexQyu6FWltcd0VhEDK7uib42f.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=HhesaQXLuRY"
  },
  {
    title: "The Witcher",
    description: "Geralt of Rivia battles monsters and destiny in a dangerous world.",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=tjujvMkqWe4"
  },
  {
    title: "Peaky Blinders",
    description: "Tommy Shelby leads a gangster family in post-WWI Birmingham.",
    image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=oVzVdvGIC7U"
  },
  {
    title: "Squid Game",
    description: "Hundreds play deadly games for a massive cash prize.",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=oqxAJKy0ii4"
  },
  {
    title: "Narcos",
    description: "The rise and fall of Colombian drug kingpin Pablo Escobar.",
    image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=xl8zdCY-abw"
  },
  {
    title: "Lucifer",
    description: "The Devil relocates to Los Angeles and runs a nightclub.",
    image: "https://image.tmdb.org/t/p/w500/4EYPN5mVIhKLfxGruy7Dy41dTVn.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=X4bF_quwNtw"
  },
  {
    title: "Vikings",
    description: "Ragnar Lothbrok leads Norsemen to explore and conquer new lands.",
    image: "https://image.tmdb.org/t/p/w500/bQLrHIRNEkE3PdIWQrZHynQZazu.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=9GgxinPwAGc"
  },
  {
    title: "You",
    description: "A bookstore manager becomes dangerously obsessed with love.",
    image: "https://image.tmdb.org/t/p/w500/cckcYc2v0yh1tc9QjRelptcOBko.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=xAN1ThhTWsE"
  },
  {
    title: "Wednesday",
    description: "Wednesday Addams investigates at Nevermore Academy.",
    image: "https://image.tmdb.org/t/p/w500/jeGtaMwGxPmQN5xM4ClnwPQcNQz.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=Q73UhUTs6y0"
  },
  {
    title: "The Queen's Gambit",
    description: "A chess prodigy's rise in a male-dominated world.",
    image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=CDrieqwSdgI"
  },
  {
  title: "Avengers: Endgame",
  description: "After the devastating events of Infinity War, the Avengers assemble once more.",
  image: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },
  {
  title: "Black Panther",
  description: "T'Challa returns home to Wakanda to take his rightful place as king.",
  image: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=xjDjIWPwcPU"
  },
  {
  title: "Joker",
  description: "A mentally troubled stand-up comedian embarks on a downward spiral.",
  image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=zAGVQLHvwOY"
  },
  {
  title: "Stranger Things",
  description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments.",
  image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=b9EkMc79ZSU"
  },
  {
  title: "Peaky Blinders",
  description: "A gangster family epic set in 1900s England centered on Tommy Shelby.",
  image: "https://image.tmdb.org/t/p/w500/vUUqzWa2LnHIVqkaKVlVGkVcZIW.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=oVzVdvGIC7U"
  },
  {
  title: "Breaking Bad",
  description: "A chemistry teacher turned meth manufacturer partners with a former student.",
  image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=HhesaQXLuRY"
  },
  {
  title: "The Witcher",
  description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys through a turbulent world.",
  image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=tjujvMkqWe4"
  },
  {
  title: "Loki",
  description: "The mercurial villain Loki resumes his role as the God of Mischief in a new timeline.",
  image: "https://image.tmdb.org/t/p/w500/voHUmluYmKyleFkTu3lOXQG702u.jpg",
  trailerUrl: "https://www.youtube.com/watch?v=nW948Va-l10"
  },

  {
    title: "All of Us Are Dead",
    description: "A zombie virus breaks out in a Korean high school.",
    image: "https://image.tmdb.org/t/p/w500/5zmiBoMzeeVdQ62no55JOJMY498.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=IN5TD4VRcSM"
  },
 
  {
    title: "The Umbrella Academy",
    description: "Estranged siblings with powers reunite to solve their father's death.",
    image: "https://image.tmdb.org/t/p/w500/scZlQQYnDVlnpxFTxaIv2g0BWnL.jpg",
    trailerUrl: "https://www.youtube.com/watch?v=0DAmWHxeoKw"
  }
];

function loadBanner() {
  const banner = document.getElementById('banner');
  const bannerTitle = document.getElementById('banner-title');
  const bannerDesc = document.getElementById('banner-desc');
  const playButton = document.querySelector('#banner button');

  const featured = movies[0];
  banner.style.backgroundImage = `url(${featured.image})`;
  bannerTitle.innerText = featured.title;
  bannerDesc.innerText = featured.description;

  playButton.onclick = () => {
    window.open(featured.trailerUrl, '_blank');
  };
}

function loadMovieRow() {
  const trendingRow = document.getElementById('trending-row');

  movies.forEach((movie) => {
    const movieContainer = document.createElement('div');
    movieContainer.className = "movie-card";

    const img = document.createElement('img');
    img.src = movie.image;
    img.alt = movie.title;
    img.onerror = () => {
      img.src = "https://via.placeholder.com/300x450?text=No+Image";
    };

    const title = document.createElement('p');
    title.innerText = movie.title;
    title.className = "movie-title";

    const playBtn = document.createElement('button');
    playBtn.innerText = "▶ Play";
    playBtn.className = "play-button";
    playBtn.onclick = () => {
      window.open(movie.trailerUrl, '_blank');
    };

    movieContainer.appendChild(img);
    movieContainer.appendChild(playBtn);
    movieContainer.appendChild(title);
    trendingRow.appendChild(movieContainer);
  });
}

loadBanner();
loadMovieRow();
