import React from 'react';

const Comments = () => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cusdis.com/js/cusdis.es.js';
    script.setAttribute('data-host', 'https://cusdis.com');
    script.setAttribute('data-app-id', 'f70790ff-c529-4458-bfcd-852074d2ef1a');
    script.async = true;
    script.defer = true;

    const container = document.getElementById('cusdis-container');
    container.appendChild(script);
  }, []);

  return <div id="cusdis-container" />;
};

export default Comments;
