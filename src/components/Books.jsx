const books = [
  { title: "THE EYE OF THE WORD", price: "2$", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1659905815i/228665.jpg" },
  { title: "GAME OF THRONE", price: "5$", image: "got.jpg" },
  { title: "MAIDEN CASTLE", price: "5$", image: "maiden.jpg" },
  { title: "HARRY POTTER", price: "7$", image: "hp.jpg" }
];

const Books = () => {
    return (
      <div className="books">
        <h2 className="section-title">LASTED ADDED</h2>
        <div className="book-grid">
          {books.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <p className="book-title">{book.title}</p>
                <p className="book-price">{book.price}</p>
              </div>
            </div>
        ))}
      </div>      
    </div>
  );
};

export default Books;