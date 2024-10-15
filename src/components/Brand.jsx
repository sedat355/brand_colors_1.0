import {useContext} from "react"
import {MainContext} from "../contexts/use-main-context"
import { FaCheck } from "react-icons/fa";

const Brand = ({brandName, objValue}) => {
  const { selectedBrands, setSelectedBrands } = useContext(MainContext);

  const toggleSelectBrand = () => {
    if(selectedBrands.includes(objValue.slug)) {
      setSelectedBrands(selectedBrands.filter(slug => slug !== objValue.slug))
    } else {
      console.log(objValue.slug)
      setSelectedBrands([...selectedBrands, objValue.slug])
    }
  }

  return(
    <li className={`brand-color-box ${selectedBrands.includes(objValue.slug) ? 'selectedBrand' : ''}`}>
        <span 
          className="brand-name"
          onClick={toggleSelectBrand}
        >
          {brandName}
          {selectedBrands.includes(objValue.slug) && <FaCheck/>}
        </span>
        <ul className="colors">
          {objValue.colors.map((color, ind) => {
            return (
              <li
                className="color"
                key={ind}
                style={{
                  "--bg-color": '#' + color,//veya `#${color}`
                  "--br-color": color !== "ffffff" ? `#${color}` : '#d0d2d3',
                }}
              ></li>
            )
          })}
        </ul>
      </li>
  )
}

export default Brand;