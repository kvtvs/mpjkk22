import React from 'react';
import PropTypes from 'prop-types';

const MediaRow = ({file}) => {
  return (
    <tr>
      <td>
        <img src={file.thumbnails.w160} alt="thumbnail" />
      </td>
      <td>
        <h4>{file.title}</h4>
        <p>{file.description}</p>
      </td>
      <td>
        <a href={file.filename}>View</a>
      </td>
    </tr>
  );
};

MediaRow.propTypes = {
  file: PropTypes.object.isRequired,
};

export default MediaRow;
