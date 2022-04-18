import { ComponentMeta, ComponentStory } from '@storybook/react';
import DropDownMenu, { IDropDownMenu } from './DropDownMenu';
import { mockDropDownMenuProps } from './DropDownMenu.mocks';

export default {
  title: 'templates/DropDownMenu',
  component: DropDownMenu,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DropDownMenu>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DropDownMenu> = (args) => (
  <DropDownMenu {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockDropDownMenuProps.base,
} as IDropDownMenu;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockDropDownMenuProps.alt,
} as IDropDownMenu;
