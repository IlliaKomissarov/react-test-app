import ContentLoader from "react-content-loader";

const Loader = () => (
  <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    color="#3f51b5"
    backgroundColor="#36394c"
    style={{ width: "100%" }}
  >
    {[1, 2, 3].map((index) => (
      <circle key={index} cx={`${126 + 44 * index}`} cy="86" r="8" />
    ))}
  </ContentLoader>
);

export default Loader;
