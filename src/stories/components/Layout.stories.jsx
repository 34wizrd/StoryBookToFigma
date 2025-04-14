import { Layout } from './layout';

export default {
  title: 'UI/Layout',
  component: Layout,
};

const Template = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <p className="text-lg text-gray-700 dark:text-gray-300">Welcome to the dashboard!</p>,
};
