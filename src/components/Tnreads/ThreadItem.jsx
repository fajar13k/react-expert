import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { TfiComment } from 'react-icons/tfi';
import { useNavigate } from 'react-router-dom';

import { postedAt } from '../../utils';

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
  authUser,
  like = null,
  dislike = null,
  neutralLike = null,
  neutralDislike = null,
}) => {
  const navigate = useNavigate();
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

  const onThreadClick = () => {
    navigate(`/threads/${id}`);
  };

  const onThreadPress = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      navigate(`/threads/${id}`);
    }
  };

  return (
    <div role="button" tabIndex={0} className="comment-item" onClick={onThreadClick} onKeyDown={onThreadPress}>
      <img className="w-10 h-fit rounded-full" src={user.avatar} alt={user.name} />
      <div className="flex-1">
        <header className="flex mb-2">
          <div className="flex-1">
            <p className="font-semibold text-sm">{user.name}<span className="text-xs text-gray-400"> @{user.id}</span></p>
            <p className="text-sm text-gray-500">{postedAt(createdAt)}</p>
          </div>
          <h1 className="px-4 py-2 rounded-xl bg-gray-200">{category}</h1>
        </header>
        <article className="py-4">
          <h1 className="font-semibold text-xl">{title}</h1>
          <p className="mt-2">{parse(body)}</p>
        </article>
        {
          like && (
            <div className="flex gap-4">
              <p>
                <button className="bg-transparent border-0 text-2xl" type="button" onClick={onLikeClick}>
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
                <button className="bg-transparent border-0 text-2xl" type="button" onClick={onDislikeClick}>
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
              <p>
                <button className="bg-transparent border-0 text-2xl" type="button" href="/detail-thread">
                  <TfiComment />
                </button>
                {totalComments}
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
};

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  like: PropTypes.func,
  dislike: PropTypes.func,
  neutralLike: PropTypes.func,
  neutralDislike: PropTypes.func,
};

export { threadItemShape };

export default ThreadItem;
