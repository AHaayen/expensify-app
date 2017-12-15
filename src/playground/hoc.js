// Higher Order Component (HOC) - A component (HOC) that renders another component(regular component)
// Reuse code
// Render hijacking
//Prop manipulation
// Abstract state



import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappenComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private Info. Please don't share!</p>}
            <WrappenComponent {...props}/>
        </div>
    );
};

const requireAuthentication = (WrappenComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (
                <WrappenComponent {...props} />
            ) : (
                <p>Please login to view the information!</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the details" />, document.getElementById('app'));