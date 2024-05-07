import "../css/Sidebar.css";

const Sidebar = () => {
    return (
        <div id="page-wrapper">
            <div id="sidebar-wrapper">
                <ul class="sidebar-nav">
                    <li>
                        <a href="#">인사관리</a>
                        <ul>
                            <li><a href="#">-사원관리</a></li>
                            <li><a href="#">-휴가관리</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;