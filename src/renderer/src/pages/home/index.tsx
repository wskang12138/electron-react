
import './index.scss'
import img1  from '../../assets/images/bg.png'
import img2 from '../../assets/images/left-bg1.png'
import Lantern from './components/lantern'
import ChristmasTree from './components/christmasTree'
import HeaderTop from './components/headerTop'
import Clocking from './components/clockIng'
import CalendarApp from './components/calendar'
import TableInfo from './components/table-info'
export const Home = (props) => {

  return (
    <div className="home" >
      <div className='layout-decoration'>
         <img src={img1} className='img1'/>
         <Lantern></Lantern>
         <ChristmasTree></ChristmasTree>
         <img src={img2} className='img2'/>
      </div>

      <div className='layout-info'>
        <div className='layout-top'>
          <HeaderTop />
        </div>
        <div className='layout-bottom'>
          <div className='all-info'>
            <TableInfo />
          </div>
          <div className='clock-ing'>
           <Clocking />
          </div>
          <div className='calendar'>
            <CalendarApp />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
