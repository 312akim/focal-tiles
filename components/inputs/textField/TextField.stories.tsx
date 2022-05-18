import { ComponentStory, ComponentMeta } from '@storybook/react';
import TextField, { ITextField } from './TextField';
import { mockTextFieldProps } from './TextField.mocks';

export default {
  title: 'templates/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTextFieldProps.base,
} as ITextField;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockTextFieldProps.alt,
} as ITextField;