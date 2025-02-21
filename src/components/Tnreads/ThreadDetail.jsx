import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

import { postedAt } from '../../utils';
import { CommentItemShape } from '../Comments/CommentItem';
import CommentInput from '../Comments/CommentInput';
import CommentList from '../Comments/CommentList';

const ThreadDetail = ({
  id,
  title,
  body,
  category,
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
  like = null,
  dislike = null,
  neutralLike = null,
  neutralDislike = null,
  addCommentThread = null,
}) => {
  const isThreadLiked = upVotesBy.includes(authUser);
  const isThreadDisliked = downVotesBy.includes(authUser);

  const onLikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      like(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
      like(id);
    } else if (isThreadLiked) {
      neutralLike(id);
    }
  };

  const onDislikeClick = (event) => {
    event.stopPropagation();
    if (!isThreadLiked && !isThreadDisliked) {
      dislike(id);
    } else if (isThreadLiked) {
      neutralLike(id);
      dislike(id);
    } else if (isThreadDisliked) {
      neutralDislike(id);
    }
  };

  const commentsList = comments.map((commentItem) => ({
    ...commentItem,
    authUser,
    threadId: id,
  }));

  return (
    <section id="thread-detail">
      <header className="flex items-center justify-between">
        <div className="flex items-center">
          <img className="rounded-full" src={owner.avatar} alt={owner.name} />
          <div className="ml-4">
            <p className="font-semibold">{owner.name}<span className="text-sm text-gray-400"> @{owner.id}</span></p>
            <p className="text-base text-gray-500">{postedAt(createdAt)}</p>
          </div>
        </div>
        <h1 className="px-4 py-2 rounded-xl bg-gray-200">{category}</h1>
      </header>
      <article className="py-4">
        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="mt-2">{parse(body)}</p>
      </article>
      <footer>
        <div className="flex gap-4">
          <p>
            <button className="bg-transparent border-0 text-2xl cursor-pointer" type="button" onClick={onLikeClick}>
              {isThreadLiked ? (
                <AiOutlineLike className="text-blue-500" />
              ) : (
                <AiOutlineLike />
              )}
            </button>
            {isThreadLiked ? (
              <span>{upVotesBy.length}</span>
            ) : (
              <span>{upVotesBy.length}</span>
            )}
          </p>
          <p>
            <button className="bg-transparent border-0 text-2xl cursor-pointer" type="button" onClick={onDislikeClick}>
              {isThreadDisliked ? (
                <AiOutlineDislike className="text-red-500" />
              ) : (
                <AiOutlineDislike />
              )}
            </button>
            {isThreadDisliked ? (
              <span>{downVotesBy.length}</span>
            ) : (
              <span>{downVotesBy.length}</span>
            )}
          </p>
        </div>
      </footer>
      <CommentInput commentThread={addCommentThread} />
      <div className="text-xl mt-4">
        <p className="text-xl mb-4">{`Semua Komentar (${comments.length})`}</p>
        {comments.length > 0 ? (
          <CommentList comments={commentsList} />
        ) : (
          <p> Masih sepi, belum ada komentar. </p>
        )}
      </div>
    </section>

  );
};

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(userShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
  addCommentThread: PropTypes.func,
  comments: PropTypes.arrayOf(PropTypes.shape(CommentItemShape))
    .isRequired,
};

export { userShape };

export default ThreadDetail;
