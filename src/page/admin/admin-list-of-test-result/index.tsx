import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface TestResultDataProps {
    NIM: string,
    Name: string,
    code_type: string,
    score: string,
    test_date: string
}

export default function ListOfTestResult(){
    const [testResultData, setTestResultData] = useState<TestResultDataProps[]>([]);

    const navigate = useNavigate();
    
    const GetTestResultData = async () => {
        await axios.get('http://localhost:3001/api/get/test_result')
        .then((response) => {
            console.log(response.data);
            setTestResultData(response.data);
        })
    }

    const HomeBtnHandler = () => {
        navigate('/admin/home');
    }
    return(
        <>
            <h1>List of Test Result</h1>
            <button onClick={HomeBtnHandler}>Home</button>
            <button onClick={GetTestResultData}>Get Test Result</button>
            <div>
                {testResultData.map((data) => {
                    return (
                        <>
                            <br/>
                            <br/>
                            <p>{`${data.NIM}`}</p>
                            <p>{`${data.Name}`}</p>
                            <p>{`${data.code_type}`}</p>
                            <p>{`${data.score}`}</p>
                            <p>{`${data.test_date}`}</p>
                        </>
                    )
                })}
            </div>
        </> 
    )
}