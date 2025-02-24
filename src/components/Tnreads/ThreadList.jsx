import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import ThreadItem, { threadItemShape } from './ThreadItem';

const ThreadList = ({
  threads, like, dislike, neutralLike, neutralDislike,
}) => {
  const { t }  = useTranslation();

  return (
    <div className="mb-8">
      {threads.length > 0 ? (
        threads.map((thread) => (
          <ThreadItem
            key={thread.id}
            {...thread}
            like={like}
            dislike={dislike}
            neutralLike={neutralLike}
            neutralDislike={neutralDislike}
          />
        ))
      ) : (
        <p className="h-screen">{t('loading')}</p>
      )}
    </div>
  );
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  like: PropTypes.func.isRequired,
  dislike: PropTypes.func.isRequired,
  neutralLike: PropTypes.func.isRequired,
  neutralDislike: PropTypes.func.isRequired,
};

export default ThreadList;
