import { Title } from './Title';

export default {
  title: 'Components/atoms/Title',
  component: Title,
};

const Template = args => <Title {...args} />;

export const MinGrey = Template.bind({});
MinGrey.args = {
  size: 'min',
  color: 'grey',
  children: 'MinGrey Title',
};

export const MinWhite = Template.bind({});
MinWhite.args = {
  size: 'min',
  color: 'white',
  children: 'MinWhite Title',
};

export const XMinBlack = Template.bind({});
XMinBlack.args = {
  size: 'xmin',
  color: 'black',
  children: 'XMinBlack Title',
};

export const SmallWhite = Template.bind({});
SmallWhite.args = {
  size: 'small',
  color: 'white',
  children: 'SmallWhite Title',
};

export const SmallGrey = Template.bind({});
SmallGrey.args = {
  size: 'small',
  color: 'grey',
  children: 'SmallGrey Title',
};

export const LargeWhite = Template.bind({});
LargeWhite.args = {
  size: 'large',
  color: 'white',
  children: 'LargeWhite Title',
};

export const DefaultWhite = Template.bind({});
DefaultWhite.args = {
  size: 'default',
  color: 'white',
  children: 'DefaultWhite Title',
};

export const DefaultGrey = Template.bind({});
DefaultGrey.args = {
  size: 'default',
  color: 'grey',
  children: 'DefaultGrey Title',
};
