function ErrorMessage({ text }) {
  return (
    <div
      style={{
        width: "fit-content",
        margin: "15px auto",
        color: "red",
      }}
    >
      {text}
    </div>
  );
}

export default ErrorMessage;
