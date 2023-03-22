import React from 'react';
import { default as OriginalBlogPostItem } from '@theme-original/BlogPostItem';

function BlogPostItem(props) {
  const { metadata } = props;

  return (
    <>
      <OriginalBlogPostItem {...props} />
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="f70790ff-c529-4458-bfcd-852074d2ef1a"
        data-page-id={metadata.permalink}
        data-page-url={metadata.permalink}
        data-page-title={metadata.title}
      ></div>
      <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
    </>
  );
}

export default BlogPostItem;
