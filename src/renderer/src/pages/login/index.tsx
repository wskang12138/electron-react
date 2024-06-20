import { useEffect, useRef, useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import './index.scss'
import Bottle from './bottle/bottle';
import Stars from './stars';
import Grap from './graph';
import { useNavigate } from 'react-router-dom';
interface Props {
  title?: string
}

export const Login: React.FC<Props> = (props) => {

  const conRef = useRef<any>(null);
  const owlRef = useRef<any>(null);
  const nav = useNavigate()
  //进来就检测内存里面是否有账号跟密码
  useEffect(() => {
    let user: any = JSON.parse(localStorage.getItem('user') as any)
    if (user?.username && user?.password) {
      nav({
        pathname: '/home'
      })
    }
  }, [])

  useEffect(() => {
    const con: any = conRef.current;
    // 定义两个函数开关（门）
    let isIn = true;      // 鼠标进去的门，默认打开
    let isOut = false;    // 鼠标出去的门，默认关闭
    let span;           // 给未出生的元素取个名字span
    // 添加监听
    const handleMouseEnter = (e) => {
      // 如果进去的门是打开的，就可以执行这个函数
      if (isIn) {
        // 获取进入的鼠标位置
        // 生成元素的位置=进入点距离窗口的距离-父盒子距离窗口的距离
        let inX = e.clientX - e.target.offsetLeft;
        let inY = e.clientY - e.target.offsetTop;
        // 创建一个span元素，并且给它对应的出生坐标
        let el = document.createElement('span');
        el.style.left = inX + 'px';
        el.style.top = inY + 'px';
        // 添加到con对应的父元素，即container
        con.appendChild(el);
        el.classList.remove('out');    // 移除出去的动画
        el.classList.add('in');       // 添加进入的动画
        span = el;
        isIn = false;     // 关闭进来的门（不能使用进入的方法）
        isOut = true;     // 打开出去的门（可以使用出去的方法）
      }
    };

    const handleMouseLeave = (e) => {
      if (isOut) {
        // 获取出去的鼠标位置
        // 生成元素的位置=出去点距离窗口的距离-父盒子距离窗口的距离
        let outX = e.clientX - e.target.offsetLeft;
        let outY = e.clientY - e.target.offsetTop;
        let parent = span.parentNode; // 保存 span 的父元素到变量
        span.classList.remove('in');     // 移除进入的动画
        span.classList.add('out');       // 添加出去的动画
        // 添加出去的坐标
        let out: any = document.querySelector('.out');
        out.style.left = outX + 'px';
        out.style.top = outY + 'px';
        isOut = false;    // 关闭出去的门
        // 当动画结束后再删除元素
        setTimeout(() => {
          if (parent == span.parentNode) { // 检查 span 的父元素是否仍然是原先的元素
            parent.removeChild(span);
          }
          isIn = true;                  // 打开进入的门
        }, 500);
      }
    };
    if (con) {
      con.addEventListener("mouseenter", handleMouseEnter);
      con.addEventListener("mouseleave", handleMouseLeave);
    }

    let owl: any = owlRef.current
    let password: any = document.getElementById('password')
    if (password && owl) {
      password.addEventListener('focus', function () {
        owl.classList.add('password');
      });

      password.addEventListener('blur', function () {
        owl.classList.remove('password');
      });
    }

    return () => {
      con.removeEventListener("mouseenter", handleMouseEnter);
      con.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [conRef]);

  const onFinish = (values: any) => {
    nav({
      pathname: '/home'
    })
    localStorage.setItem('user', JSON.stringify(values))
  };


  return (
    <div className="login" >
      <Bottle />
      <Stars />
      <Grap />
      <div className="container" ref={conRef}>
        <div className="owl" ref={owlRef}>
          <div className="hand"></div>
          <div className="hand hand-r"></div>
          <div className="arms">
            <div className="arm"></div>
            <div className="arm arm-r"></div>
          </div>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input className='tbx username' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              className='tbx'
              placeholder="Password"
              id='password'
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="sub">
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
