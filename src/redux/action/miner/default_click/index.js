import store from '../../../store'

export const CLICK = () => {
    return (dispatch) => {
        if (store.getState().miner.boost) {
            return (dispatch(DEFAULT_CLICK(store.getState().miner.boostRate)))
        }
        dispatch(DEFAULT_CLICK(1))
    }
};

const DEFAULT_CLICK = (count) => ({
    type: 'DEFAULT_CLICK',
    count
});