import axios from 'axios';


//set action types here
export const LAUNCH_DATA_START = "LAUNCH_DATA_START";
export const LAUNCH_DATA_SUCCESS = "LAUNCH_DATA_SUCCESS";
export const LAUNCH_DATA_FAILURE = "LAUNCH_DATA_FAILURE";


//set action creator with Thunk middleware
//going to house axios API call
export const fetchLaunchData = () => {
    return function(dispatch){
        dispatch({type: LAUNCH_DATA_START});
        
            axios
            .get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                console.log(res);
                // const flightData = res.data.map(item => {
                //     const flightDataArray = {};
                //     flightDataArray.flightNumber = item.flight_number;
                // });
                // flightData.flightNumber = res.data.map(flightData => {
                //     return flightData.flight_number})
                const flightData = {};
                flightData.flightNumber = res.data[0].flight_number;
                flightData.missionName = res.data[0].mission_name;
                flightData.rocket = res.data[0].rocket.rocket_name;
                flightData.launchSite = res.data[0].launch_site.site_name_long;
                flightData.launchSuccess = res.data[0].launch_success;
                flightData.details = res.data[0].details;

                dispatch({
                    type: LAUNCH_DATA_SUCCESS, 
                    payload: flightData});
            })
            .catch(err =>{
                console.log(err);
                dispatch({
                    type: LAUNCH_DATA_FAILURE,
                    payload: err.message + 'Fetching launch data...'
                })
            })
      
    };
};