import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

const LeaderboardList = ({ leaderboards }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6">
      {leaderboards.length > 0 ? (
        leaderboards.map((leaderboard, index) => (
          <LeaderboardItem key={leaderboard.user.id} {...leaderboard} index={index} />
        ))
      ) : (
        <p>{t('loading')}</p>
      )}
    </div>
  );
};

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape))
    .isRequired,
};

export default LeaderboardList;
