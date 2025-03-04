// mocks
import { pageBuilderStateMock } from 'test/mocks/reducer/pageBuilderMock';

// others
import { REDUCER_KEY as PAGE_BUILDER } from '../../actionsType';

// store
import { isLoadingSelector } from '../../selectors';

const state = pageBuilderStateMock[PAGE_BUILDER];

describe('isLoadingSelector', () => {
  it('should return true', () => {
    // before
    const selectorFunction = (isLoadingSelector as any).resultFunc;

    // result
    expect(selectorFunction(state)).toBe(true);
  });

  it('should return false', () => {
    // mock
    const stateMock = { ...state, isLoading: true };

    // before
    const selectorFunction = (isLoadingSelector as any).resultFunc;

    // result
    expect(selectorFunction(stateMock)).toBe(true);
  });
});
