import React from "react";
import propTypes from 'prop-types'

const Result = ({value}) => {
    console.log("Renderizacion de result", value)
    return (
        <div className="result">
            {value}
        </div>
    )
}

Result.propTypes = {
    value: propTypes.string.isRequired
}
Result.defaultProps = {
    value: "0"
}


export default Result