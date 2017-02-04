const initialState = {
    sessions: [
        {
            actions: [
                {
                    type: 'SET_CLIENT_ENVIRONMENT',
                    payload: null
                },
                {
                    type: 'SET_SEARCH_HISTORY',
                    payload: null
                },
                {
                    type: 'SET_TRAIN_DETAILS',
                    payload: {
                        querying: true
                    }
                },
                {
                    type: 'SET_TRAIN_DETAILS',
                    payload: {
                        querying: false,
                        trainDetails: {}
                    }
                },
                {
                    type: 'SET_COACH',
                    payload: null
                },
                {
                    type: 'SET_ORDER_COACH_TYPE',
                    payload: null
                },
                {
                    type: 'SET_PASSENGERS',
                    payload: null
                },
                {
                    type: 'ADD_PLACE_TO_ORDER',
                    payload: {
                        coachIndex: 8,
                        number: 22
                    }
                },
                {
                    type: 'SET_BEDDING_OPTION',
                    payload: false
                }
            ]
        }
    ]
};

export default function history(state = initialState, action) {
    switch (action) {
        default:
            return state;
    }
}