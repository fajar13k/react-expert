import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useInput from '../../hooks/useInput';

const ThreadInput = ({ threadInput }) => {
  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const navigate = useNavigate();

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <div>
      <div className="mb-4">
        <label className="input-label-rumpi" htmlFor="title">Judul</label>
        <input className="input-component-rumpi" id="title" type="text" placeholder="Judul" value={title} onChange={onTitleChange} />
      </div>
      <div className="mb-4">
        <label className="input-label-rumpi" htmlFor="body">Konten</label>
        <textarea className="input-component-rumpi" id="body" placeholder="Ada apa hari ini?" value={body} onChange={onBodyChange} />
      </div>
      <p className="text-base mx-1 my-0 text-gray-800 mb-2">
        <strong>{body.length}</strong>
        /320
      </p>
      <div className="mb-4">
        <label className="input-label-rumpi" htmlFor="category">Kategori</label>
        <input className="input-component-rumpi" id="category" type="text" placeholder="Category" value={category} onChange={onCategoryChange} />
      </div>

      <button className="btn-primary" type="submit" onClick={threadInputHandler}>Post!</button>
    </div>
  );
};

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
