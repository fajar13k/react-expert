import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import {
  asyncToggleDownVoteComment,
  asyncToggleNeutralDownVoteComment,
  asyncToggleNeutralUpVoteComment,
  asyncToggleUpVoteComment,
} from '../../states/threadDetail/action';
import CommentItem, { CommentItemShape } from './CommentItem';

const CommentList = ({ comments }) => {
  const dispatch = useDispatch();

  const handleUpVoteComment = (threadId, commentId) => {
    dispatch(asyncToggleUpVoteComment(commentId, threadId));
  };

  const handleDownVoteComment = (threadId, commentId) => {
    dispatch(asyncToggleDownVoteComment(commentId, threadId));
  };

  const handleNeutralUpVoteComment = (threadId, commentId) => {
    dispatch(asyncToggleNeutralUpVoteComment(commentId, threadId));
  };

  const handleNeutralDownVoteComment = (threadId, commentId) => {
    dispatch(asyncToggleNeutralDownVoteComment(commentId, threadId));
  };

  return (
    <div className="mb-8">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem
            handleUpVoteComment={handleUpVoteComment}
            handleDownVoteComment={handleDownVoteComment}
            handleNeutralUpVoteComment={handleNeutralUpVoteComment}
            handleNeutralDownVoteComment={handleNeutralDownVoteComment}
            key={comment.id}
            comment={comment}
            {...comment}
          />
        ))
      ) : (
        <p>Bentar ya lagi loading.</p>
      )}
    </div>
  );
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(CommentItemShape)).isRequired,
};

export default CommentList;
