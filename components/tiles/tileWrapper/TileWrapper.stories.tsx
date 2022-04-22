import { ComponentMeta, ComponentStory } from '@storybook/react';
import TileWrapper, { ITileWrapper } from './TileWrapper';
import { mockTileWrapperProps } from './TileWrapper.mocks';

export default {
  title: 'templates/TileWrapper',
  component: TileWrapper,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TileWrapper>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TileWrapper> = (args) => (
  <TileWrapper {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
  ...mockTileWrapperProps.base,
} as ITileWrapper;

export const Alt = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Alt.args = {
  ...mockTileWrapperProps.alt,
} as ITileWrapper;
