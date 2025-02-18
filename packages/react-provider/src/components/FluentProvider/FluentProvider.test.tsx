import { resetIdsForTests } from '@fluentui/react-utilities';
import * as React from 'react';
import { FluentProvider } from './FluentProvider';
import * as renderer from 'react-test-renderer';
import { isConformant } from '../../common/isConformant';
import { ProviderContext } from '@fluentui/react-shared-contexts';

describe('FluentProvider', () => {
  isConformant({
    disabledTests: ['component-handles-classname'],
    Component: FluentProvider,
    displayName: 'FluentProvider',
    helperComponents: [ProviderContext.Provider],
  });

  afterEach(() => {
    resetIdsForTests();
  });

  /**
   * Note: see more visual regression tests for FluentProvider in /apps/vr-tests.
   */
  it('renders a default state', () => {
    const component = renderer.create(<FluentProvider>Default FluentProvider</FluentProvider>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
