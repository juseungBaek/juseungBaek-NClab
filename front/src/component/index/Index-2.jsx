import Index3 from "./Index-3";


const Index2 = () => {
    return(
        <div className="index-right-container">
                <div className="index-2">
                    <div className="index-2-img">
                        <img src="logo192.png"/>
                    </div>
                    <div className="index-2-t">
                        <table className="index-2-t-table">
                            <thead>
                                <tr>
                                    <td>이름</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>사번</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>부서</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>직급</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>전화번호</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>생년월일(나이)</td>
                                    <td></td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <Index3/>
            </div>
    )
}
export default Index2;