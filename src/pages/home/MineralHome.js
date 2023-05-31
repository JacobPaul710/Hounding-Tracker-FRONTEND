import Nav1 from '../../components/nav/Nav1';

import './mineralHome.css';

function MineralHome() {
    return(
    <div id="homeBody">
        <Nav1 />
        <div id="welcomeDiv">
            <h1 id="intro">Welcome to Oregon's Hounding Tracker!</h1>
            <h2 id="info">Rock-hounders can submit their most exciting finds, or view general locations of where others are hounding, with real time data.</h2>
        </div>
    </div>
)}

export default MineralHome;