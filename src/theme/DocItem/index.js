import React from 'react';
import OriginalDocItem from '@theme-original/DocItem';

import Remark42 from './Remark42';


function DocItem(props) {
  return (
    <div>
      <OriginalDocItem {...props} />
      <Remark42 />
    </div>
  );
}

export default DocItem;
