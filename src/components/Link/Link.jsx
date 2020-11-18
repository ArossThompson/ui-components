import React from 'react';

const Link = ( { href, className, children }) => {
  const onClick = (e) => {
    // Allow user to load in new window
    if (e.metaKey || e.ctrlKey) {
      return;
    }

    // Prevent page reload
    e.preventDefault();

    // Change URL
    window.history.pushState({}, '', href);

    // Navigation Event 
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  return <a onClick={onClick} href={href} className={className}>{children}</a>

}

export default Link;
