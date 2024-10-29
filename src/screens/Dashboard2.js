import { useEffect,  useState } from "react";
import { getData } from "../api";

const Dashboard = () => {
    const [data, setData] = useState({});
    useEffect(() => {
        getData()
            .then((tempData) => {setData(tempData);});
    }, []);
    console.log(data);
    return  (
        <div>{JSON.stringify(data)}</div>
    );
};

export default Dashboard;