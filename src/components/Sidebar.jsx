import { useState } from "react"
import Modal from "./Modal"
import SocialIcons from "./SocialIcons"
import useWindowDimensions from "../hooks/use-window-dimensions"

function Sidebar() {
  const [ isOpenModal, setIsOpenModal ] = useState(false)
  const { screenWidth } = useWindowDimensions();

  const handleOpenModal = () => {
    setIsOpenModal(true)
  }

  return (
    <div className="sidebar">
      {isOpenModal && (
        <Modal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
      <div className="logo-container">
        <img
          className="logo-img"
          src="/src/assets/images/brand-colors-logo.png"
        />
        <a className="logo-text">
          <span className="logo-brand">Brand</span>
          <span className="logo-colors">Colors</span>
        </a>
      </div>
      <div className="sidebar-content">
        {screenWidth >= 1024 && (
          <p className="added-parag-1">
            The biggest collection of official brand color codes around. Curated
            by <a>@brandcolors</a> and friends.
          </p>
        )}

        <div className="sidebar-links">
          <div className="text-links">
            <a>Suggest a Brand</a>
            <a onClick={handleOpenModal}>About BrandColors</a>
          </div>

          {screenWidth >= 1024 && (
            <div className="added-parag-2">
              <a>
                <span>
                  Brand<b>Colors</b> + DesignBombs
                </span>
                Learn how to make a website - we have put together an in-depth
                guide that will help you build your first website with
                WordPress.
              </a>
            </div>
          )}

          <div>
            <a href="https://www.namecheap.com/hosting/shared/?clickID=QKUzuiULPxyPRrBxlP15MXB6UkCy2DxU1xvRTs0&irgwc=1&utm_source=IR&utm_medium=Affiliate&utm_campaign=1939807&affnetwork=ir&ref=ir">
              <img
                className="sidebar-img"
                src="/src/assets/images/brand-colors.jfif"
              />
            </a>
          </div>

          <div>
            <a
              className="desc-link"
              href="https://www.namecheap.com/hosting/shared/?clickID=QKUzuiULPxyPRrBxlP15MXB6UkCy2DU81xvRTs0&irgwc=1&utm_source=IR&utm_medium=Affiliate&utm_campaign=1939807&affnetwork=ir&ref=ir"
            >
              Build your website for just $3.88/mth. More value and performance
              with Namecheap
            </a>
          </div>

          <div>
            <a
              className="ads"
              href="https://www.carbonads.net/?utm_source=brandcolorsnet&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon"
            >
              ads via carbon
            </a>
          </div>
        </div>
      </div>
      {/* {
        screenWidth >= 1024 && <SocialIcons/>
      } */}
    </div>
  )
}
export default Sidebar
