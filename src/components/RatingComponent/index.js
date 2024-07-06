import './index.css'

const RatingComponent = (props) => {
    const {each,clickEachRatingProduct} = props
    const clickEachRating = () => {
        clickEachRatingProduct(each)
    }
    return (
    <li className="list-item">
        <button type="button" className="button-11" onClick={clickEachRating}>
            <img src = {each.imageUrl} className="image-1"/>
        </button>
    </li>
    )
}

export default RatingComponent