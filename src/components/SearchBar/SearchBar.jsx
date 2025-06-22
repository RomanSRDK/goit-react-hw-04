function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const input = form.elements.search;
    const value = input.value.trim();

    onSearch(value);
    form.reset();
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

export default SearchBar;
