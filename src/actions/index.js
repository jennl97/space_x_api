import axios from 'axios';


//set action types here
export const LAUNCH_DATA_START = "LAUNCH_DATA_START";
export const LAUNCH_DATA_SUCCESS = "LAUNCH_DATA_SUCCESS";
export const LAUNCH_DATA_FAILURE = "LAUNCH_DATA_FAILURE";


//set action creator with Thunk middleware
//going to house axios API call
export const fetchLaunchData = () => dispatch => {    
        dispatch({type: LAUNCH_DATA_START});        
            axios
            .get('https://api.spacexdata.com/v3/launches')
            .then(res => {
                // console.log(res);
                let flightData = res.data.map(item => {
                    const flightDataArray = {};
                    flightDataArray.flightNumber = item.flight_number;
                    flightDataArray.missionName = item.mission_name;
                    flightDataArray.rocket = item.rocket.rocket_name;
                    flightDataArray.launchSite = item.launch_site.site_name_long;
                    flightDataArray.launchSuccess = item.launch_success;
                    flightDataArray.details = item.details;
                    console.log(flightDataArray);
                    return (flightDataArray)
                });
                
                // console.log(flightData);
                dispatch({
                    type: LAUNCH_DATA_SUCCESS, 
                    payload: flightData});
            })
            .catch(err =>{
                console.log(err);
                dispatch({
                    type: LAUNCH_DATA_FAILURE,
                    payload: err.message
                })
            })
      
    };
