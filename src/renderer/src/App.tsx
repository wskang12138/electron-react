import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import vhCheck from 'vh-check'
import RouterConainer from './router'
import { ThemePrimary } from '@renderer/config'
import 'virtual:svgsprites'
import './styles/global.scss'
import './styles/app.scss'

vhCheck()

interface Props {
  title?: string
}
const App: React.FC<Props> = () => {
  const _location = useLocation()
  const [isStart, setIsStart] = useState(false)

  useEffect(() => {
    if (['#/start-loading'].includes(window.location.hash)) setIsStart(true)
    else setIsStart(false)
  }, [_location])

  return (
    <div className={`App w-screen h-screen overflow-hidden`}>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: ThemePrimary
          }
        }}
      >
          <RouterConainer />
      </ConfigProvider>
    </div>
  )
}
export default App
