import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <footer  className="bg-dark text-light py-3 mt-auto">
      <Container className="text-center">
        <p className="mb-0">
          © {new Date().getFullYear()} CDAC.IN. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}