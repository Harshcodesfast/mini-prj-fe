import { useState } from "react";
import { Button } from "react-bootstrap";
import LoginModal from "../components/LoginModal";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome</h1>

      <Button onClick={() => setShow(true)}>Login</Button>

      <LoginModal
        show={show}
        handleClose={() => setShow(false)}
      />
    </div>
  );
}