import React, { useEffect } from 'react';

//import connect
import { connect } from 'react-redux';

//import action
import { fetchLaunchData } from '../actions/index';



const Launches = ({fetchLaunchData, flightNumber,missionName, rocket, launchSite, launchSuccess,    details, error, isFetching}) => {
    useEffect(() => {
        fetchLaunchData();
    },[fetchLaunchData]);

    const fetchLaunch = e => {
        e.preventDefault();
        fetchLaunchData();
    };

    return(
        <div>
            <div>
            <button className='launchButton' onClick={fetchLaunch}>SpaceX Launches</button>
            </div>
            <section className='launchContainer'>
            <div className='launchData'>
                <h3>Flight Number: {flightNumber}</h3>
                <p>Mission Name: {missionName}</p>
                <p>Rocket: {rocket}</p>
                <p>Launch Site: {launchSite}</p>
                <p>Launch Success: {launchSuccess}</p>
                <p>Launch Details: {details}</p>
            </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        flightNumber: state.flightNumber,
        missionName: state.missionName,
        rocket: state.rocket,
        launchSite: state.launchSite,
        launchSuccess: state.launchSuccess,
        details: state.details,
        error: state.error,
        isFetching: state.isFetching

    };
};

export default connect(mapStateToProps, {fetchLaunchData: fetchLaunchData})(Launches);