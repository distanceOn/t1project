import { Text } from './Text';

export default {
  title: 'Components/atoms/Text',
  component: Text,
};

const Template = args => <Text {...args} />;

export const DefaultGrey = Template.bind({});
DefaultGrey.args = {
  size: 'default',
  color: 'grey',
  children: 'DefaultGrey Title',
};

export const LineheightBlack = Template.bind({});
LineheightBlack.args = {
  size: 'lineheight',
  color: 'black',
  children: 'LineheightBlack Title',
};

export const LineheightWhite = Template.bind({});
LineheightWhite.args = {
  size: 'lineheight',
  color: 'white',
  children: 'LineheightWhite Title',
};

export const ThinGrey = Template.bind({});
ThinGrey.args = {
  size: 'thin',
  color: 'grey',
  children: 'ThinGrey Title',
};

export const DefaultLightGrey = Template.bind({});
DefaultLightGrey.args = {
  size: 'default',
  color: 'lightgrey',
  children: 'DefaultLightGrey Title',
};
