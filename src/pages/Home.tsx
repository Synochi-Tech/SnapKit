import Container from "../shared/components/Container";

const HomePage = () => {
  return (
    <Container id="home" className="py-5">
      <h1 className="text-2xl dark:text-main-100 text-main-400">
        Button
      </h1>
      <p>
        A simple button component for React applications.
      </p>
    </Container>
  );
};

export default HomePage;
