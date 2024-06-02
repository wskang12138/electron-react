import React, { FC } from "react";
import Anination from "./anination";
import Card from "./card";
import './index.scss';

const Clocking: FC = () => {

  return (
  <div className="clocking">
    <div className="infotroduce">
     本月加班申请30小时,需要补11.5小时,已经加班30，点击设置申请时间，仅自己可见
    </div>
    <div className="card">
      <Card />
    </div>
    <div className="anination">
     <Anination />
    </div>
  </div>)
}
export default Clocking
