import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
const Sidebar = () => {
  return (
    <div>
        <SearchInput/>
        <div className='divider px-3'></div>
        <Conversations/>
        {/* <LogoutButton/> */}
    </div>
  )
}

export default Sidebar