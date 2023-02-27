import React from "react";
import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SocialIcons = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
      <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
    </div>
  );
};

export default SocialIcons;
