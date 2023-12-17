// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {galaryDeatails, getClickImage, isActive} = props
  const {thumbnailUrl, id, thumbnailAltText} = galaryDeatails

  const thumbnaSize = isActive ? 'thumbali-active' : 'active'

  const clickButton = () => {
    getClickImage(id)
  }
  return (
    <li className="list-items">
      <button className="button" type="button" onClick={clickButton}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={thumbnaSize}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
