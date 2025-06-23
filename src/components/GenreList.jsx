import '../styles/Genre.css';

const genres = [
  { name: "Fantasy", description: "Fantasy books" },
  { name: "Science Fiction", description: "Sci-Fi books" },
  { name: "Mystery", description: "Mystery and detective stories" },
  { name: "Non-Fiction", description: "Informative and factual books" }
];

const GenreList = () => {
  return (
    <div className="genres">
      <h2 className="section-title">GENRES</h2>
      <div className="genre-grid">
        {genres.map((genre, idx) => (
          <div className="genre-card" key={idx}>
            <h3>{genre.name}</h3>
            <p>{genre.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreList;