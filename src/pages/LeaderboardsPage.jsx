import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import LeaderboardList from '../components/Leaderboards/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/leaderboards/action';

const LeaderboardsPage = () => {
  const { leaderboards = [] } = useSelector((states) => states);
  const { t } = useTranslation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <>
      <h3 className="my-8 font-semibold text-2xl">{t('leaderboards')}</h3>
      <LeaderboardList leaderboards={leaderboardsList} />
    </>
  );
};

export default LeaderboardsPage;
