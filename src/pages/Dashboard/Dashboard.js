import { useEffect } from 'react';
import './Dashboard.css';
import setPreferredLang from '../../components/translatePage';
import Header from '../../components/Header/Header';

function Dashboard() {
    useEffect(() => {
        setPreferredLang();
    }, []);

    return(
        <div>
            <Header />
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard;