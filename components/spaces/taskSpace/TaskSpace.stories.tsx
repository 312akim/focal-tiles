import { ComponentMeta, ComponentStory } from '@storybook/react';
import TaskSpace, { ITaskSpace } from './TaskSpace';
import { mockTaskSpaceProps } from './TaskSpace.mocks';

export default {
  title: 'templates/TaskSpace',
  component: TaskSpace,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TaskSpace>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TaskSpace> = (args) => (
  <TaskSpace {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTaskSpaceProps.base,
} as ITaskSpace;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockTaskSpaceProps.alt,
} as ITaskSpace;
