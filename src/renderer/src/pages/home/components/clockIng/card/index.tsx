
import { Button } from "antd";
import { FC, useEffect, useRef, useState } from "react";
import './index.scss';
import dayjs from "dayjs";
import { apiGet } from "@renderer/utils/api/api_get";
let time
const Card: FC = () => {

  const cardRef = useRef<any>(null)
  const ref = useRef<any>(null)
  const [nowTime, setNowTime] = useState<any>()

  useEffect(() => {
    if (ref?.current) {
      function myTime() {
        let time = new Date();
        let hh = time.getHours();  //时
        let mm = time.getMinutes();  //分
        let ss = time.getSeconds();  //秒
        // Math.floor() 向下取整
        let clock1 = document.getElementById("clock1")
        let clock2 = document.getElementById("clock2")
        let clock4 = document.getElementById("clock4")
        let clock5 = document.getElementById("clock5")
        let clock7 = document.getElementById("clock7")
        let clock8 = document.getElementById("clock8")
        if (clock1) {
          clock1.innerText = `${Math.floor(hh / 10)}`;
        }
        if (clock2) {
          clock2.innerText = `${hh % 10}`
        }
        if (clock4) {
          clock4.innerText = `${Math.floor(mm / 10)}`;
        }
        if (clock5) {
          clock5.innerText = `${mm % 10}`;
        }
        if (clock7) {
          clock7.innerText = `${Math.floor(ss / 10)}`;
        }
        if (clock8) {
          clock8.innerText = `${ss % 10}`;
        }
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

  const Onclocking = async () => {
    //发起请求请求成功后
    // let res = await apiGet('nightWorkTime/api/basic/addTodayTime')
    let res = true
    if (res) {
      setNowTime(res)
      let dom = cardRef.current
      if (dom) {
        dom.classList.add('cardEntery');
        dom.ontransitionend = function () {
          setTimeout(() => {
            dom.classList.remove('cardEntery');
          }, 100000)
        }
      }
    }

  }


  return (<div className="cardApp" ref={cardRef}>
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
        <Button type="primary" size="large" className="dButton" onClick={Onclocking}>
          打卡
        </Button>
      </div>
    </div>
    <div className="back">
      <p>{nowTime}</p>
    </div>
  </div>)
}
export default Card
