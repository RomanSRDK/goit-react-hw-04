import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

function Loader() {
  return <ClipLoader color="#191919" cssOverride={override} />;
}

export default Loader;
