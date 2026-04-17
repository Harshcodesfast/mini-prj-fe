import { useState } from "react";
import { Button } from "react-bootstrap";
import LoginModal from "../components/LoginModal";
import { useAuth } from "../components/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [show, setShow] = useState(false);

  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="container mt-5 text-center">
      <h1>Welcome</h1>

      {user && (
        <p className="mt-3 fs-5">
          Hello, <strong>{user.name}</strong> 👋
        </p>
      )}

      {!user ? (
        <Button onClick={() => setShow(true)}>
          Login
        </Button>
      ) : (
        <Button
          variant="danger"
          onClick={() => {
            logout();
            navigate("/");
          }}
        >
          Logout
        </Button>
      )}

      {!user && (
        <LoginModal
          show={show}
          handleClose={() => setShow(false)}
        />
      )}
    </div>
  );
}