import styles from "./SearchBar.module.css";
import toast from "react-hot-toast";

function SearchBar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.search;
    const value = input.value.trim();

    if (value === "") {
      toast.error("What are you looking for?", {
        icon: "👀",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
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
        placeholder="Type it. See it. Love it"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
}

export default SearchBar;
