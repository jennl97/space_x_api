import{
    LAUNCH_DATA_START,
    LAUNCH_DATA_SUCCESS,
    LAUNCH_DATA_FAILURE
} from '../actions/index';

 const initialState = {
    // flightNumber: '',
    // missionName: '',
    // rocketName: '',
    // launchSite: '',
    // launchSuccess: '',
    // details: '',
    flightData: [],
    error: '',
    isFetching: false
    };

export const reducer = (state = initialState, action) => {
    console.log('reducer', action);
    switch(action.type){
        case LAUNCH_DATA_START:
            return{
                ...state,
                isFetching: true
            };
        case LAUNCH_DATA_SUCCESS:
            return{
                ...state,
                flightData: action.payload,
                error: '',
                isFetching: false                
            };
        case LAUNCH_DATA_FAILURE:
            return{
                ...state,
                error: "Unable to retrieve flight data",
                isFetching: false
                };
        default:
            return state;
    }
};