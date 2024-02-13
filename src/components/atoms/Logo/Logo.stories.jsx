import { Logo } from './Logo';

export default {
  title: 'Components/atoms/Logo',
  component: Logo,
};

const Template = args => <Logo {...args} />;

export const SmallWhite = Template.bind({});
SmallWhite.args = {
  color: 'white',
  size: 'small',
};

export const DefaultWhite = Template.bind({});
DefaultWhite.args = {
  color: 'white',
  size: 'default',
};

export const BgGrey = Template.bind({});
BgGrey.args = {
  color: 'grey',
  size: 'bg',
};
