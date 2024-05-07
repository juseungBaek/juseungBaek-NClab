import Index1 from "../component/index/Index-1";
import Index2 from "../component/index/Index-2";
import Sidebar from "../component/Sidebar";
import "../css/Index.css";

const Index = () => {
    return(
        <div className="index-container">
            <Sidebar/>
            <Index1/>
            <Index2/>
        </div>
    )
}

export default Index;