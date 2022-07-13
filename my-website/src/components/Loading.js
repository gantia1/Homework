import { Spinner } from "react-bootstrap";
import './Loading.css'

function Loading({ text }) {
    return (
        <div className="loading">
            <div>
                <span className="me-2">{text}</span>
                <Spinner animation="border" size="sm" />
            </div>
        </div>
    )
}

Loading.defaultProps = {
    text: 'Loading...'
}

export default Loading;