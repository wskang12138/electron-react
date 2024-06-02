
import { Button } from "antd";
import { FC, useEffect, useRef } from "react";
import './index.scss';
let time
const Card: FC = () => {
  const ref = useRef<any>(null)
  useEffect(() => {
    if (ref?.current) {
      function myTime() {
        let time = new Date();
        let hh = time.getHours();  //时
        let mm = time.getMinutes();  //分
        let ss = time.getSeconds();  //秒
        // Math.floor() 向下取整
        document.getElementById("clock1").innerText = Math.floor(hh / 10);
        document.getElementById("clock2").innerText = hh % 10;
        document.getElementById("clock4").innerText = Math.floor(mm / 10);
        document.getElementById("clock5").innerText = mm % 10;
        document.getElementById("clock7").innerText = Math.floor(ss / 10);
        document.getElementById("clock8").innerText = ss % 10;
      }
      if (!time) {
        time = setInterval(myTime, 1000);
      }
      // 一秒执行一次
    }
    return (() => {
        clearInterval(time)
    })
  }, [ref])

  return (<div className="cardApp">
    <div className="front">
      <div className="title">
        <h2>当前系统时间</h2>
      </div>
      <div className="time">
        <div className="clock" ref={ref}>
          <span id="clock1">0</span>
          <span id="clock2">0</span>
          <span id="clock3">:</span>
          <span id="clock4">0</span>
          <span id="clock5">0</span>
          <span id="clock6">:</span>
          <span id="clock7">0</span>
          <span id="clock8">0</span>
        </div>
      </div>
      <div className="button">
        <Button type="primary" size="large" className="dButton">
          打卡
        </Button>
      </div>
    </div>
    <div className="back">
      <p>求点赞~</p>
      <p>求关注~</p>
      <p>求评论~</p>
      <p>求收藏~</p>
    </div>
  </div>)
}
export default Card
