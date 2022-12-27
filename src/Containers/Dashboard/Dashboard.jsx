import React, { useEffect, useState } from 'react';
import BarChart from '../../Components/BarChart/BarChart';
import { getApi } from '../../Services/Services';

function Dashboard(props) {

     const [data, setdata] = useState([])

    useEffect(()=> {
        getApi("Valencia,spain").then(data => setdata(data))
        console.log(data);
    })


    return (
        <>
            {/* <BarChart data={"eyey"} options = {"oyoy"} /> */}
        </>
    );
}

export default Dashboard;