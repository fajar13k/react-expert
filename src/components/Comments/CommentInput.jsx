import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const CommentInput = ({ commentThread }) => {
  const { t } = useTranslation();

  const [content, setContent] = useState('');

  function commentThreadHandler() {
    if (content.trim()) {
      commentThread(content);
      setContent('');
    }
  }

  function handleTextChange({ target }) {
    if (target.value.length <= 320) {
      setContent(target.value);
    }
  }

  return (
    <div>
      <textarea className="input-component-rumpi" placeholder={t('give_comment')} rows={3} value={content} onChange={handleTextChange} />
      <p className="text-base mx-1 my-0 text-gray-800 mb-2">
        <strong>{content?.length}</strong>
        /320
      </p>
      <button className="btn-primary" type="submit" onClick={commentThreadHandler}>{t('post')}</button>
    </div>
  );
};

CommentInput.propTypes = {
  commentThread: PropTypes.func.isRequired,
};

export default CommentInput;
