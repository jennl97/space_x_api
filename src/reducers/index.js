import{
    LAUNCH_DATA_START,
    LAUNCH_DATA_SUCCESS,
    LAUNCH_DATA_FAILURE
} from '../actions/index';

export const initialState = {
    flightNumber: '',
    missionName: '',
    rocket: '',
    launchSite: '',
    launchSuccess: '',
    details: '',
    error: '',
    isFetching: false
    };

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case LAUNCH_DATA_START:
            return{
                ...state,
                isFetching: true
            };
        case LAUNCH_DATA_SUCCESS:
            return{
                ...state,
               ...action.payload,
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