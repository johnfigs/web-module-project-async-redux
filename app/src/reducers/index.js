import {FETCH_START, FETCH_SUCCESS, FETCH_FAIL} from './../actions';

const initialState = {
    quote: {
        anime:"",
        character: "",
        quote: ""
    },
    isFetching: false,
    error: ''
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state,
            isFetching: true,
            error: ''
            });
        case(FETCH_SUCCESS):
            return({
                ...state,
                quote: action.payload,
                isFetching: false
            });
        case(FETCH_FAIL):
            return({
                ...state,
                error: action.payload,
                isFetching: false
            });
        default: 
            return state;
    }
}