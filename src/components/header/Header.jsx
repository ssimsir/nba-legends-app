import headerStyle from "./Header.module.scss" 
import nbaLogo from "../../assets/nba-logo.png"

const Header = (props) => {
   const handeleSearch = (value) =>{
      props.setSearch(value)
   }
   return(
      <div className={headerStyle.main}>        
         <img className={headerStyle.h1} src={nbaLogo} alt="nba-logo" />
         <h1 className={headerStyle.h1}>NBA Legends</h1>
         <input onChange={e => handeleSearch(e.target.value)} className={headerStyle.input} type="search" placeholder="Search Player" />      
      </div>
   )
}

export default Header;