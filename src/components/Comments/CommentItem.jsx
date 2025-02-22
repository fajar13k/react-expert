import React from 'react';
import PropTypes from 'prop-types';

import { postedAt } from '../../utils';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';

const CommentItem = ({ comment, content, createdAt, handleUpVoteComment, handleDownVoteComment, handleNeutralUpVoteComment, handleNeutralDownVoteComment, owner }) => {
  const { authUser, downVotesBy, id, threadId, upVotesBy } = comment;

  const isCommentLiked = upVotesBy.includes(authUser);
  const isCommentDisliked = downVotesBy.includes(authUser);

  const onUpVoteComment = (event) => {
    event.stopPropagation();

    if (!isCommentLiked && !isCommentDisliked) {
      handleUpVoteComment(id, threadId);
    } else if (isCommentDisliked) {
      handleNeutralDownVoteComment(id, threadId);
      handleUpVoteComment(id, threadId);
    } else if (isCommentLiked) {
      handleNeutralUpVoteComment(id, threadId);
    }
  };

  const onDownVoteComment = (event) => {
    event.stopPropagation();

    if (!isCommentLiked && !isCommentDisliked) {
      handleDownVoteComment(id, threadId);
    } else if (isCommentLiked) {
      handleNeutralUpVoteComment(id, threadId);
      handleDownVoteComment(id, threadId);
    } else if (isCommentDisliked) {
      handleNeutralDownVoteComment(id, threadId);
    }
  };

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
        <div className="flex gap-4">
          <p>
            <button className="bg-transparent border-0 text-2xl" type="button" onClick={onUpVoteComment}>
              {isCommentLiked ? (
                <AiOutlineLike className="text-blue-500" />
              ) : (
                <AiOutlineLike />
              )}
            </button>
            {isCommentLiked ? (
              <span>{upVotesBy.length}</span>
            ) : (
              <span>{upVotesBy.length}</span>
            )}
          </p>
          <p>
            <button className="bg-transparent border-0 text-2xl" type="button" onClick={onDownVoteComment}>
              {isCommentDisliked ? (
                <AiOutlineDislike className="text-red-500" />
              ) : (
                <AiOutlineDislike />
              )}
            </button>
            {isCommentDisliked ? (
              <span>{downVotesBy.length}</span>
            ) : (
              <span>{downVotesBy.length}</span>
            )}
          </p>
        </div>
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
