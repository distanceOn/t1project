import { Picture } from './Picture';

export default {
  title: 'Components/atoms/Picture',
  component: Picture,
};

const Template = args => <Picture {...args} />;

export const SmallChoice = Template.bind({});
SmallChoice.args = {
  size: 'small',
  image: 'choice',
};

export const DefaultShoes = Template.bind({});
DefaultShoes.args = {
  size: 'default',
  image: 'shoes',
};

export const LargeTeammate = Template.bind({});
LargeTeammate.args = {
  size: 'large',
  image: 'andre',
};
