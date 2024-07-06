import './index.css'

const FilterComponent = (props)=>{
    const {each,filterClickProduct,activeFilterId} = props
    const filterClick = ()=>{
        filterClickProduct(each)
    }
    const a = activeFilterId === each.id ? 'butt-1 active' : ''
    return (
        <li>
            <button className={`butt-1 ${a}`} onClick={filterClick}>{each.name}</button>
        </li>
    )
}

export default FilterComponent