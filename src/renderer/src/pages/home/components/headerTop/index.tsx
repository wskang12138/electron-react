import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, Space } from "antd";
import { FC, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import './index.scss'
export const HeaderTop: FC = () => {

  const List = Array.from({ length: 18 }, (_, i) => i);
  const ref = useRef(null)
  const nav = useNavigate()
  const outlogin = () => {
    setTimeout(()=>{
      window.location.reload() //3D效果有影响
    },0)
    localStorage.clear()
    nav({
      pathname: '/index'
    })
  }
  const items: MenuProps['items'] = [
    {
      label: (
        <span onClick={() => { outlogin() }}> 退出登录</span>
      ),
      key: '0',
    },

  ];

  useEffect(() => {
    if (ref?.current) {
      document.addEventListener("mousemove", (e) => {
        // 鼠标位置
        let mouseX = e.x;
        let mouseY = e.y;
        // 所有item
        let items = document.querySelectorAll(".item");
        items.forEach((item: any) => {
          // 距离左边和顶部的距离
          let offsetX = item.offsetLeft;
          let offsetY = item.offsetTop;

          //计算以item为原点鼠标在x,y轴上的位置
          let diffX = mouseX - offsetX;
          let diffY = mouseY - offsetY;
          //   求出item旋转角度
          //1° = Math.pI /180

          let hudu = Math.atan2(diffY, diffX);
          let angle = hudu / (Math.PI / 180);
          // 设置item旋转
          item.style.transform = `rotate(${angle}deg)`
        })
      })
    }

  }, [ref])
  return (
    <div className="header-top">
      <div className="header-decoration">
        <div className="box" ref={ref}>
          {
            List.map((item, index) => {
              return (<div className="item" key={index}></div>)
            })
          }
        </div>
      </div>
      <div className="header-username">
        <Dropdown menu={{ items }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <span className="name">吴世康</span>
              <Avatar icon={<UserOutlined />} />
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  )
}
export default HeaderTop
