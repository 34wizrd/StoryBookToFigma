import { Sidebar } from './sidebar';

export default {
  title: 'UI/Sidebar',
  component: Sidebar,
};

const Template = (args) => <Sidebar {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: ['Home', 'Projects', 'Settings'],
  collapsed: false,
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  items: ['Home', 'Projects', 'Settings'],
  collapsed: true,
};
