import React from 'react';
import OriginalMDXPage from '@theme-original/MDXPage';

import Remark42 from './Remark42';


function MDXPage(props) {
  return (
    <div>
      <OriginalMDXPage {...props} />
      <Remark42 />
    </div>
  );
}

export default MDXPage;
