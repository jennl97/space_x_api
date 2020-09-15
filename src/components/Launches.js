import React from 'react';

//import connect
import { connect } from 'react-redux';

//import action
import { fetchLaunchData } from '../actions/index';



const Launches = props => {

    const fetchLaunch = e => {
        e.preventDefault();
        props.fetchLaunchData()
    }
    console.log(fetchLaunchData());

    return(
        <div>
            <div>
            <button className='launchButton' onClick={fetchLaunch}>SpaceX Launches</button>
            </div>
            <section className='launchContainer'>
            <div className='launchData'>
                {props.flightData.map(flightData => (
                    <div>
                    <h3>Flight Number: {flightData.flightNumber}</h3>
                    <p>Mission Name: {flightData.missionName}</p>
                    <p>Rocket: {flightData.rocket}</p>
                    <p>Launch Site: {flightData.launchSite}</p>
                    <p>Launch Success: {flightData.launchSuccess}</p>
                    
                    <p>Launch Details: {flightData.details}</p>
                    </div>
                ))}
            </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        flightData: state.flightData

    };
};

export default connect(
    mapStateToProps,
    {fetchLaunchData: fetchLaunchData})(Launches);