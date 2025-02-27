/**
 * Test scenario
 *
 * - asyncPopulateUsersAndThreads thunk
 * - should dispatch action correctly when data fetching is successful
 * - should dispatch action and call alert correctly when data fetching is failed
 */

import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

import api from '../../utils/api';
import { asyncPopulateUsersAndThreads } from './action';
import { receiveThreadsActionCreator } from '../threads/action';
import { receiveUsersActionCreator } from '../users/action';

const fakeThreadsResponse = [
  {
    id: 'thread-1',
    title: 'Belajar React',
    body: 'Lorem Ipsum Dolor Sit Amet',
    category: 'React',
    createdAt: '2023-05-29T07:55:52.266Z',
    ownerId: 'user-mQhLzINW_w5TxxYf',
    totalComments: 0,
    upVotesBy: [],
    downVotesBy: [],
  },
  {
    id: 'thread-2',
    title: 'Redux and its advantages',
    body: 'Consectertum Adipiscing Elit',
    category: 'Redux',
    createdAt: '2023-06-29T07:55:52.266Z',
    ownerId: 'user-mQkLzINW_w5TxxYf',
    totalComments: 1,
    upVotesBy: [],
    downVotesBy: [],
  },
];

const fakeUsersResponse = [
  {
    id: 'user-1',
    name: 'John Doe',
    email: 'johndoe@mail.com',
    avatar: 'https://ui-avatars.com/api/?name=johndoe&background=random',
  }
];

const fakeErrorResponse = new Error('Oops, something went wrong!');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api.getAllUsers = api._getAllUsers;
    api.getAllThreads = api._getAllThreads;
  });

  it('should dispatch action correctly when data fetching is successful', async () => {
    // Arrange
    // Stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse);
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    // Mock dispatch
    const dispatch = vi.fn();

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
  });

  it('should dispatch action and call alert correctly when data fetching is failed', async () => {
    // Arrange
    // Stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse);
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    // Mock Dispatch
    const dispatch = vi.fn();
    // Mock Alert
    window.alert = vi.fn();

    // Action
    await asyncPopulateUsersAndThreads()(dispatch);

    // Assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).not.toHaveBeenCalledWith(fakeErrorResponse.message);
  });
});