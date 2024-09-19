import { IoMdSearch } from "react-icons/io"
import { MdDownload } from "react-icons/md"
import { MdInsertLink } from "react-icons/md"
import { IoClose } from "react-icons/io5"

function Header() {
  return (
    <div className="header">
      <div className="left-side">
        <IoMdSearch className="search-icon" />
        <input 
          className="search-input" placeholder="Search Brands" />
      </div>

      <div className="right-side">
        <div className="brands-collected">
          <MdDownload className="collected-icon"/>
          <MdInsertLink className="collected-icon"/>
          <IoClose className="collected-icon"/>
          <span>0 brands collected</span>
        </div>

        <div className="all-brands">
          <MdDownload className="download-icon" />
          <span>All Brands</span>
        </div>
      </div>
    </div>
  )
}
export default Header
