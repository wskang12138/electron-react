import { Spin } from 'antd'

interface Props {}
export const Loading: React.FC<Props> = () => {
  return (
    <div className="loading-component flex justify-center pt-[10%]">
      <Spin />
    </div>
  )
}
