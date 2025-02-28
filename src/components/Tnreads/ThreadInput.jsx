import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import useInput from '../../hooks/useInput';
import { useTranslation } from 'react-i18next';

const ThreadInput = ({ threadInput }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [title, onTitleChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [category, onCategoryChange] = useInput('');

  function threadInputHandler() {
    if (title.trim() && body.trim() && category.trim()) {
      threadInput(title, body, category);
      navigate('/');
    }
  }

  return (
    <div>
      <div className="mb-4">
        <label className="input-label-rumpi" htmlFor="title">{t('title')}</label>
        <input className="input-component-rumpi" id="title" type="text" placeholder={t('title_helper')} value={title} onChange={onTitleChange} />
      </div>
      <div className="mb-4">
        <label className="input-label-rumpi" htmlFor="body">{t('content')}</label>
        <textarea className="input-component-rumpi" id="body" placeholder={t('content_helper')} rows={3} value={body} onChange={onBodyChange} />
      </div>
      <p className="text-base mx-1 my-0 text-gray-800 dark:text-white mb-2">
        <strong>{body.length}</strong>
        /320
      </p>
      <div className="mb-4">
        <label className="input-label-rumpi" htmlFor="category">{t('category')}</label>
        <input className="input-component-rumpi" id="category" type="text" placeholder={t('category_helper')} value={category} onChange={onCategoryChange} />
      </div>

      <button className="btn-primary" type="submit" onClick={threadInputHandler}>{t('post')}</button>
    </div>
  );
};

ThreadInput.propTypes = {
  threadInput: PropTypes.func.isRequired,
};

export default ThreadInput;
