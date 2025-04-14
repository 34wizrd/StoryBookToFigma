import { Header } from './header';

export default {
  title: 'UI/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Dashboard',
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  title: 'Projects',
};
