function Sidebar() {
  return (
    <div className="sidebar">
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

      <div className="sidebar-links">
        <div className="text-links">
          <a>Suggest a Brand</a>
          <a>About BrandColors</a>
        </div>

        <div>
          <a href="https://www.namecheap.com/hosting/shared/?clickID=QKUzuiULPxyPRrBxlP15MXB6UkCy2DxU1xvRTs0&irgwc=1&utm_source=IR&utm_medium=Affiliate&utm_campaign=1939807&affnetwork=ir&ref=ir">
            <img
              className="sidebar-img"
              src="/src/assets/images/brand-colors.jfif"
            />
          </a>
        </div>

        <div>
          <a className="desc-link" href="https://www.namecheap.com/hosting/shared/?clickID=QKUzuiULPxyPRrBxlP15MXB6UkCy2DU81xvRTs0&irgwc=1&utm_source=IR&utm_medium=Affiliate&utm_campaign=1939807&affnetwork=ir&ref=ir">
            Build your website for just $3.88/mth. More value and performance
            with Namecheap
          </a>
        </div>

        <div>
          <a className="ads" href="https://www.carbonads.net/?utm_source=brandcolorsnet&utm_medium=ad_via_link&utm_campaign=in_unit&utm_term=carbon">ads via carbon</a>
        </div>
      </div>
    </div>
  )
}
export default Sidebar
