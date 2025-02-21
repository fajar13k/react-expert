import React from 'react';
import PropTypes from 'prop-types';

import { postedAt } from '../../utils';

const CommentItem = ({ content, createdAt, owner }) => {
  return (
    <div className="comment-item">
      <img className="w-10 h-fit rounded-full" src={owner.avatar} alt={owner.name} />
      <div className="flex-1">
        <header className="flex mb-2">
          <div className="flex-1">
            <p className="font-semibold text-sm">{owner.name}<span className="text-xs text-gray-400"> @{owner.id}</span></p>
            <p className="text-sm text-gray-500">{postedAt(createdAt)}</p>
          </div>
        </header>
        <article>
          <p className="text-base">{content}</p>
        </article>
      </div>
    </div>
  );
};

const ownerCommentItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const CommentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerCommentItemShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...CommentItemShape,
};

export { CommentItemShape };

export default CommentItem;
