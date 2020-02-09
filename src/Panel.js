import React from 'react';
import marked from 'marked';

const Panel = ({ text }) => {
  marked.setOptions({
    breaks: true
  });
  return (
    <div className='col-md-6 col-sm-12'>
      <div
        id='preview'
        dangerouslySetInnerHTML={{
          __html: marked(text)
        }}
      ></div>
    </div>
  );
};
export default Panel;
