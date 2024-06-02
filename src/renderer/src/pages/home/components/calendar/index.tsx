import React from 'react';
import type { CalendarProps } from 'antd';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';



const CalendarApp: React.FC = () => {
  const onPanelChange = (value: Dayjs, mode: CalendarProps<Dayjs>['mode']) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return <Calendar onPanelChange={onPanelChange} />;

};

export default CalendarApp;
