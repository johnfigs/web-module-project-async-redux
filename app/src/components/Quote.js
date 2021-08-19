import React, { useEffect } from "react";
import { getQuote, fetchFail } from "../actions";
import { connect } from 'react-redux';

const Quote = (props) => {
    const {quote, isFetching, error, getQuote} = props;

    useEffect(() => {
        getQuote();
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
      if (isFetching) {
        return <h2>Fetching a quote for ya!</h2>;
      }
    

    return (
        <div>
            <p>{quote.quote}</p>
            <p>{`-${quote.character} from ${quote.anime}`}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        quote: state.quote,
        isFetching: state.isFetching,
        error: state.error
    };
};
export default connect(mapStateToProps, { getQuote, fetchFail})(Quote);