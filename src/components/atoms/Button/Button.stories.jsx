import { Button } from './Button';

export default {
  title: 'Components/atoms/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const CategoryTransparent = Template.bind({});
CategoryTransparent.args = {
  color: 'transparent',
  type: 'category',
  children: 'CategoryTransparent Button',
};

export const DefaultPrimary = Template.bind({});
DefaultPrimary.args = {
  color: 'primary',
  type: 'default',
  href: '#',
  children: 'DefaultPrimary Button',
};

export const StepsTransparent = Template.bind({});
StepsTransparent.args = {
  color: 'transparent',
  type: 'steps',
  children: 'StepsTransparent Button',
};

export const ApplySecondary = Template.bind({});
ApplySecondary.args = {
  color: 'secondary',
  type: 'apply',
  children: 'ApplySecondary Button',
};

export const ResetTransparent = Template.bind({});
ResetTransparent.args = {
  color: 'transparent',
  type: 'reset',
  children: 'ResetTransparent Button',
};

export const CatalogPrimary = Template.bind({});
CatalogPrimary.args = {
  color: 'primary',
  type: 'catalog',
  children: 'CatalogPrimary Button',
  href: '#',
};
