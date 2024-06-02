import { useEffect, useRef } from 'react';
import './index.scss'

export const ChristmasTree = (props) => {

  const ref: any = useRef(null)

  useEffect(() => {
    if (ref?.current) {
      createTree()
      function createTree() {
        for (let i = 0; i < 128; i++) {
          // 创建li元素
          let li = document.createElement('li');
          // 设置li元素的样式
          // --h、--d为自定义属性，可通过var函数对其调用
          // --h：线条高度
          // --d：动画的延迟时间
          li.style.cssText = '--h:calc(600px /250 * ' + i + ');--d:calc(-28s /250 * ' + i + ');';
          // 追加li元素
          ref?.current?.appendChild(li);
        }
      }
    }
  }, [ref])

  return (
    <div className="christmas-tree">
      <div className="star"></div>
      <ul className="tree" ref={ref}></ul>
    </div>
  )
}

export default ChristmasTree
