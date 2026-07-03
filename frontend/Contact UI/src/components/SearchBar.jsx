const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="🔍 Search by name, phone, or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {searchTerm && (
        <button
          className="clear-btn"
          onClick={() => setSearchTerm("")}
        >
          ✖
        </button>
      )}
    </div>
  );
};

export default SearchBar;