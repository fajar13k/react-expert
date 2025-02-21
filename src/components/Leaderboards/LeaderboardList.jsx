import React from 'react';
import PropTypes from 'prop-types';

import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

const LeaderboardList = ({ leaderboards }) => {
  return (
    <div className="flex flex-col gap-6">
      {leaderboards.length > 0 ? (
        leaderboards.map((leaderboard, index) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} index={index} />
        ))
      ) : (
        <p>Bentar ya lagi loading.</p>
      )}
    </div>
  );
};

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape))
    .isRequired,
};

export default LeaderboardList;
