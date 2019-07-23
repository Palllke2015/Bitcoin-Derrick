import store from '../../../store'


export const MINING = () => {
    return (dispatch) => {
        dispatch(mining_start());
        try {

            let interval = setInterval(()=> {
                if (store.getState().miner.count > store.getState().items.tankVolume - 2) {
                    clearInterval(interval);
                    dispatch(mining_end());
                    return false;
                }
                dispatch(mining(2))
            }, 2000);

             setTimeout(()=> {
                 clearInterval(interval);
                 dispatch(mining_end())
             }, 12000);
        }
        catch (e) {
            dispatch(mining_error(e))
        }

    }
};

const mining_start = () => ({
   type: 'MINING_START'
});

const mining_end = () => ({
    type: 'MINING_END'
});

const mining = (number) => ({
    type: 'MINING_SUCCESS',
    number,
});

const mining_error = (error) => ({
    type: 'MINING_ERROR',
    error,
});