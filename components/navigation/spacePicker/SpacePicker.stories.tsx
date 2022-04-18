import { ComponentMeta, ComponentStory } from '@storybook/react';
import SpacePicker, { ISpacePicker } from './SpacePicker';
import { mockSpacePickerProps } from './SpacePicker.mocks';

export default {
  title: 'templates/SpacePicker',
  component: SpacePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SpacePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpacePicker> = (args) => (
  <SpacePicker {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockSpacePickerProps.base,
} as ISpacePicker;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockSpacePickerProps.alt,
} as ISpacePicker;
