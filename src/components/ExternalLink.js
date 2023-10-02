import React from 'react';
import { Link } from 'react-router-dom';

const ExternalLink = ({ to, children, ...props }) => {
  if (to.startsWith('http') || to.startsWith('www')) {
    return (
      <a href={to} {...props} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  } else {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }
};

export default ExternalLink;
