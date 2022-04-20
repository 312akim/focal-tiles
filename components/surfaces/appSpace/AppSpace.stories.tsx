import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppSpace, { IAppSpace } from './AppSpace';
import { mockAppSpaceProps } from './AppSpace.mocks';

export default {
  title: 'templates/AppSpace',
  component: AppSpace,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof AppSpace>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppSpace> = (args) => (
  <AppSpace {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockAppSpaceProps.base,
} as IAppSpace;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockAppSpaceProps.alt,
} as IAppSpace;
