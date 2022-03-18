import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';

const fetchJson = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok) {
      return json;
    } else {
      throw new Error('response erhe');
    }
  } catch (err) {
    throw new Error(err.message);
  }
};

// TODO: add necessary imports
const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);
  const getMedia = async () => {
    try {
      const media = await fetchJson(baseUrl + 'media');
      const allFiles = await Promise.all(
        media.map(async (file) => {
          return await fetchJson(`${baseUrl}media/${file.file_id}`);
        })
      );
      setMediaArray(allFiles);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return {mediaArray};
};

export {useMedia};
