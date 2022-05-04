import { ComponentMeta, ComponentStory } from '@storybook/react';
import TaskTile, { ITaskTile } from './TaskTile';
import { mockTaskTileProps } from './TaskTile.mocks';

export default {
  title: 'templates/TaskTile',
  component: TaskTile,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TaskTile>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TaskTile> = (args) => (
  <TaskTile {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTaskTileProps.base,
} as ITaskTile;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockTaskTileProps.alt,
} as ITaskTile;
