import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="no-match-wrapper">
      <div className="icon">
        <FontAwesomeIcon icon="grimace" />
      </div>
      <h2>We couldn't find that page</h2>
      <Link to="/" className="link-to-homepage">
        Return to homepage
      </Link>
    </div>
  );
}
