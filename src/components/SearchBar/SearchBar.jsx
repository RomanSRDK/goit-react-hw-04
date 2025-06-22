import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.search;
    const value = input.value.trim();

    if (value === "") {
      toast.error("Please enter a search query");
      return;
    }

    onSearch(value);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        name="search"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
