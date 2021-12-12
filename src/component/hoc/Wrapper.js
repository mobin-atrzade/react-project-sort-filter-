import React from 'react'

const Wrapper = (WrapperdComponent, className) => {
    return (props) => {
        return (
            <div className={className}>
                <WrapperdComponent {...props} />
            </div>
        )
    }
}

export default Wrapper;
