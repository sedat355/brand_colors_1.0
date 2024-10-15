import BrandsData from "../brands-data.json"
import Brand from "./Brand"

function Content() {

  const renderedBrands = Object.entries(BrandsData).map(([key, objValue]) => {
    return (
      <Brand key={key} brandName={key} objValue={objValue}/>
    )
  })

  return (
    <div className="content">
      <ul className="color-list">{renderedBrands}</ul>
    </div>
  )
}
export default Content
