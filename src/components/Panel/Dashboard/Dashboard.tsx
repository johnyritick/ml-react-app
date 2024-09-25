import React from 'react';
import { Table, Button, Avatar } from 'antd';

interface DataType {
  key: string;
  name: string;
  url: string;
  ipv4: string;
  email: string;
}

const dataSource: DataType[] = [
  {
    key: '1',
    name: 'John Doe',
    url: 'https://www.figma.com/community',
    ipv4: '92.1.31.123.00.10',
    email: 'john@doe.co.in',
  },
  // More rows...
];

const columns = [
  // {
  //   title: 'Image',
  //   dataIndex: 'image',
  //   key: 'image',
  //   render: () => <Avatar src="https://i.pravatar.cc/40" />,
  // },
  {
    title: 'S.No',
    dataIndex: 'key',
    key: 'key'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Urls',
    dataIndex: 'url',
    key: 'url',
    render: (text: string) => <a href={text}>{text}</a>,
  },
  // {
  //   title: 'IPv4',
  //   dataIndex: 'ipv4',
  //   key: 'ipv4',
  // },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Action',
    key: 'action',
    render: () => <Button type="primary">View</Button>,
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default Dashboard;
