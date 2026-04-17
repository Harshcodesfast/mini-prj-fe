import { Button } from "react-bootstrap";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutBtn() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <Button
      variant="danger"
      className="mb-3"
      onClick={() => {
        logout();
        navigate("/");
      }}
    >
      Logout
    </Button>
  );
}