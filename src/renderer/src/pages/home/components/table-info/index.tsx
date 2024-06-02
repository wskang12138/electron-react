import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  time: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '序号',
    dataIndex: 'key',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '加班时长',
    dataIndex: 'time',
    key: 'time',
  },

];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    time: '40.25',
  },
  {
    key: '2',
    name: 'Jim Green',
    time: '40.25',
  },
  {
    key: '3',
    name: 'Joe Black',
    time: '40.25',
  },
];

const TableInfo: React.FC = () => <Table pagination={false} columns={columns} dataSource={data} />;

export default TableInfo;
