
import { CSSProperties } from 'react';
import './index.scss'

export const Lantern = (props) => {

  const fuList = Array.from({ length: 4 }, (_, i) => '愿');
  return (
    <div className="lantern">
      <div className="lantern-box">
        <div className="lantern-top"></div>
        <div className="lantern-content">
        {
          fuList.map((fu, index) => {
            const style: CSSProperties & { [key: string]: string | number } = {
              '--i': index
            };
            return <span key={index} style={style}>{fu}</span>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default Lantern
