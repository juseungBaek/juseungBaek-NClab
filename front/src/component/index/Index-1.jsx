

const Index1 = () => {
    return (
        <div className="index-1">
            <div className="index-1-1">
                <div className="index1-1-input">
                    <input type="text" className="index-1-input"></input>
                    <button className="index-1-1-button" onClick={""}>검색</button>
                </div>
                <button className="index-1-1-button2" onClick={""}>사원추가</button>
            </div>
            <table className="index-table">
                <thead>
                    <tr>
                        <td>
                            <select>
                                <option value="">부서</option>
                                <option value="">인사팀</option>
                                <option value="">개발팀</option>
                                <option value="">영업팀</option>
                                <option value="">회계팀</option>
                            </select>
                        </td>
                        <td>사번</td>
                        <td>이름</td>
                        <td>
                            <select>
                                <option value="">직급</option>
                                <option value="">사원</option>
                                <option value="">대리</option>
                                <option value="">과장</option>
                                <option value="">부장</option>
                            </select>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>개발팀</td>
                        <td>A001</td>
                        <td>백주승</td>
                        <td>사원</td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}
export default Index1;