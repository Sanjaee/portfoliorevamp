import "../footer/Footer.css";
import { Link } from "react-router-dom";
export const BackMe = () => {
  return (
    <div>
      <div className="footer__button">
        <Link to="/">BACK HERE</Link>
      </div>
    </div>
  );
};
