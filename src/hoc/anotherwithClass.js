import React, { Component } from 'react';

// const withClass = (WrappedComponent, className) => {
//     return (props) =>(
//         <div className={className}>
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }

const withClass = (WrappedComponent, className) => {
    return class extends Component { //no class name required as it is anonymous class
        render() {
            return (
                <div className={className}>
                    <WrappedComponent {...this.props}/>
                </div>
            )
        }
    }
}

export default withClass;