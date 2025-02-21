import React from 'react';
import PropTypes from 'prop-types';

const LeaderboardItem = ({ user, score, index }) => {
  const adjustedIndex = index + 1;

  const getBackgroundClass = (index) => {
    switch (index) {
    case 0:
      return 'bg-yellow-300';
    case 1:
      return 'bg-gray-300';
    case 2:
      return 'bg-yellow-600';
    default:
      return '';
    }
  };

  const getFontClass = (index) => {
    return index < 3 ? 'font-bold' : '';
  };

  const getBoxShadowClass = (index) => {
    return index >= 3 ? 'shadow-[0_0_0_2px_rgba(128,128,128,0.5)]' : '';
  };

  return (
    <section className={`flex justify-between items-center p-4 rounded-3xl lg:rounded-2xl ${getBackgroundClass(index)} ${getBoxShadowClass(index)}`}>
      <header className="flex items-center gap-4">
        <h1 className={`text-xl ${getFontClass(index)}`}>{adjustedIndex}</h1>
        <img className="rounded-full" src={user.avatar} alt={user.name} />
        <div>
          <p className={`${getFontClass(index)}`}>{user.name}</p>
          <span className="text-sm">
            @
            {user.id}
          </span>
        </div>
      </header>
      <article>
        <p className="font-bold text-2xl">{score}<span className="font-normal text-xs"> pts</span></p>
      </article>
    </section>
  );
};

const userLeaderboardItemShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userLeaderboardItemShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
