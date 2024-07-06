import './index.css'
import { IoIosClose } from "react-icons/io";
const SelectedFilterComponent = (props)=>{
    const {each,filterClearProduct} = props
    const filterClear = ()=>{
        filterClearProduct(each)
    }
    return (
        <li className="li-filter" onClick={filterClear}>
            <IoIosClose className='close-icon'/>
            <p>{each.name}</p>
        </li>
    )
}

export default SelectedFilterComponent