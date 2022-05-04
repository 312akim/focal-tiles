// Mock props to test interface props
import { ITaskTile } from './TaskTile';

const base: ITaskTile = {
  title: "Debug Price Estimate",
  status: "Started",
  notes: "None",
  dueDate: "06/03/22",
  timer: 5432,
  id: 1,
};

const alt: ITaskTile = {
  title: "Hero CTA style update",
  status: "Complete",
  notes: "The text is overlapping the hero image.",
  dueDate: "04/05/22",
  timer: 7654,
  id: 2,
};

export const mockTaskTileProps = {
  base,
  alt,
};
