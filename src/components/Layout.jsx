import { Outlet } from 'react-router-dom'
import ToggleMenu from './ToggleMenu'
import Header from './Header'
import Nav from './Nav'
import BackgroundLines from './BackgroundLines'
import Preloader from './Preloader'

export default function Layout() {
  return (
    <>
      <ToggleMenu />

      <div className="container max-w-[1320px] mx-auto px-5 xl:px-3">
        <Header />

        <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
          <Nav />

          <div className="lg:w-3/4 space-y-6 pb-12">
            <Outlet />
          </div>
        </div>
      </div>

      <BackgroundLines />
      <Preloader />
    </>
  )
}
