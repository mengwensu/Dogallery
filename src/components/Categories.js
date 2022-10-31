import Header from "./Header"
import DogList from "../dogList.json"
import { useRef } from "react"
import propTypes from 'prop-types'
const Categories = () => {

    const current = "Sporting";
    function handleClick(tab) {
      // 👇️ update input value
      current = tab;
      // 👇️ access input value
      console.log(current);
    }
   
    return (

    <div>
        <Header/>

        <div className='Categories'>
            <h1 className="categoryTitle">CATEGORIES</h1>
            
            <input className="searchBar" type="search" placeholder="Search"></input>``
            ``
            <div className="categoryTabs">
                <button className="tabs" >HERDING</button>
                <button className="tabs">HOUND</button>
                <button className="tabs">SPORTING</button>
                <button className="tabs">NON-SPORTING</button>
                <button className="tabs">WORKING</button>
                <button className="tabs">TERRIER</button>
                <button className="tabs">TOY</button>
                
            </div>
            <div className="categoryCircle"></div>
        </div>
    </div>
    
)
}
// Categories.protoTypes = {
//     onClick: propTypes.func,
//     tab: propTypes.string,
// }

export default Categories


