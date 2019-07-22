export const BOOST = (timer, rate) => {
    return (dispatch) => {
        dispatch(BOOST_START(rate));
        setTimeout(() => {
            dispatch(BOOST_END())
        }, timer)
    }
};


const BOOST_START = (rate) => ({
    type: 'BOOST_START',
    rate
});

const BOOST_END = () => ({
    type: 'BOOST_END'
});