/**
 * Test scenario
 *
 * - asyncPopulateLeaderboards thunk
 * - should dispatch action correctly when data fetching is successful
 * - should dispatch action and call alert correctly when data fetching is failed
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { asyncPopulateLeaderboards } from './action';
import { receiveLeaderboardsActionCreator } from './action';

const fakeLeaderboardsResponse = [
  {
    user: {
      id: 'user-1',
      name: 'Jane Doe',
      email: 'janedoe@example.com',
      avatar: 'https://ui-avatars.com/api/?name=janedoe&background=random',
    },
    score: 13,
  },
];

const fakeErrorResponse = new Error('Oops, something went wrong!');

describe('asyncPopulateLeaderboards thunk', () => {
  beforeEach(() => {
    api._getAllLeaderBoards = api.getAllLeaderBoards;
  });

  afterEach(() => {
    api.getAllLeaderBoards = api._getAllLeaderBoards;
  });

  it('should dispatch action correctly when data fetching is successful', async () => {
    // Arrange
    // Stub implementation
    api.getAllLeaderBoards = () => Promise.resolve(fakeLeaderboardsResponse);
    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPopulateLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveLeaderboardsActionCreator(fakeLeaderboardsResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching is failed', async () => {
    // Arrange
    // Stub implementation
    api.getAllLeaderBoards = () => Promise.reject(fakeErrorResponse);
    // Mock Dispatch
    const dispatch = vi.fn();
    // Mock Alert
    window.alert = vi.fn();

    // Action
    await asyncPopulateLeaderboards()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});