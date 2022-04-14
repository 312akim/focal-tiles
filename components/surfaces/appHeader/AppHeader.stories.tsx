import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppHeader, { IAppHeader } from './AppHeader';
import { mockAppHeaderProps } from './AppHeader.mocks';

export default {
  title: 'templates/AppHeader',
  component: AppHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AppHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppHeader> = (args) => (
  <AppHeader {...args} />
);

export const LoggedIn = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

LoggedIn.args = {
  ...mockAppHeaderProps.loggedIn,
} as IAppHeader;

export const LoggedOut = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

LoggedOut.args = {
  ...mockAppHeaderProps.loggedOut,
} as IAppHeader;
