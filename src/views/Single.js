import React from 'react';
import {useLocation} from 'react-router-dom';
import {mediaUrl} from '../utils/variables';

const Single = () => {
  const location = useLocation();
  console.log(location);
  const file = location.state.file; // TODO in the next task: single media from props.location.state

  return (
    <React.Fragment>
      <h1>{file.title}</h1>
      <img src={mediaUrl + file.filename} alt={file.title} />
    </React.Fragment>
  );
};

// TODO in the next task: add propType for location

export default Single;
