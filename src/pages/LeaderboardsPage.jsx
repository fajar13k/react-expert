import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import LeaderboardList from '../components/Leaderboards/LeaderboardList';
import { asyncPopulateLeaderboards } from '../states/shared/action';

const LeaderboardsPage = () => {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <>
      <h3 className="my-8 font-semibold text-2xl">Leaderboards</h3>
      <LeaderboardList leaderboards={leaderboardsList} />
    </>
  );
};

export default LeaderboardsPage;
