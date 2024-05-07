import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const vacation = () =>{
        navigate("/vacationpage");
    }
    const salary = () => {
        navigate("/salarypage");
    }
    return(
        <div className="Header">
            <Link to="/">홈</Link> <button onClick={()=>vacation()}>휴가관리</button><button onClick={()=>salary()}>급여관리</button>
        </div>
    )
}
export default Header;