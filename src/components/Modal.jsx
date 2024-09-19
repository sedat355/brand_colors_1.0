import ReactDOM from "react-dom"
import { IoClose } from "react-icons/io5"

function Modal({ setIsOpenModal }) {
  return ReactDOM.createPortal(
    <>
      <div
        onClick={() => setIsOpenModal(false)} 
        className="overlay"></div>
      <div className="modal">
        <div
          onClick={() => setIsOpenModal(false)}
          className="modal-close-icon-container"
        >
          <IoClose className="modal-close-icon" />
        </div>
        <h2>About BrandColors</h2>
        <p>
          BrandColors was created by DesignBombs. The goal was to create a
          helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It&apos;s been featured by Smashing Magazine, CSS-Tricks, Web Design
          Depot, Tuts+, and over <b>2 million pageviews</b>. There are now over{" "}
          <b>600 brands</b> with <b>1600 colors</b> and the collection is always
          growing.
        </p>
      </div>
    </>,
    document.querySelector(".modal-container"),
  )
}

export default Modal
