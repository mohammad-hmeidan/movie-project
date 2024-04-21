import React from "react";
import { Link } from "react-router-dom";
import "../css/NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="container">
        <h1>Uh-Oh</h1>
        <p>
          the page you are lokking for may have been moved, deleted or possibly
          never existed
        </p>
        <div>404</div>

        <Link to="/">
          <i class="fa-solid fa-arrow-left"></i> Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
