import BrandsData from "../brands-data.json"

function Content() {
  const renderedBrands = Object.entries(BrandsData).map(([key, objValue]) => {
    return (
      <li className="brand-color-box" key={key}>
        <span className="brand-name">{key}</span>
        <ul className="colors">
          {objValue.colors.map((color, ind) => {
            return (
              <li
                className="color"
                key={ind}
                style={{
                  backgroundColor: `#${color}`,
                  border: `1px solid #${color}`,
                }}
              ></li>
            )
          })}
        </ul>
      </li>
    )
  })

  return (
    <div className="content">
      <ul className="color-list">{renderedBrands}</ul>
    </div>
  )
}
export default Content
