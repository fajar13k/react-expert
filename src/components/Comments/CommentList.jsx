import React from 'react';
import PropTypes from 'prop-types';

import CommentItem, { CommentItemShape } from './CommentItem';

const CommentList = ({ comments }) => {
  return (
    <div className="mb-8">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
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
