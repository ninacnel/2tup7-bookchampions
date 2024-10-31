import { Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
    const navigate = useNavigate();

    const backHomeHandler = () => {
        navigate("/");
    }
  return (
    <div>
        <h2>La pagina no existe</h2>
        <Button onClick={backHomeHandler}>
            Volver al inicio
        </Button>
    </div>
  )
}

export default NotFound