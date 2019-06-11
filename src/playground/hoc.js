import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is Private Info Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

// requierAuthentication
const requierAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
                <WrappedComponent {...props} />
                ) : (<p>Please Login to get Info</p>)
            }
            
        </div>
    )
}


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requierAuthentication(Info)


ReactDOM.render(<AuthInfo isAuth={true} info="This is the deatils" />,document.getElementById("app"))
// ReactDOM.render(<AdminInfo isAdmin={true} info="This is the deatils" />,document.getElementById("app"))





"babel-cli": "6.24.1",
"babel-core": "6.25.0",
"babel-loader": "7.1.1",
"babel-plugin-transform-class-properties": "6.24.1",
"babel-plugin-transform-object-rest-spread": "6.23.0",
"babel-preset-env": "1.5.2",
"babel-preset-react": "6.24.1",
"css-loader": "2.1.1",
"jest": "24.6.0",
"live-server": "^1.2.1",
"moment": "2.18.1",
"node-sass": "4.12.0",
"normalize.css": "^8.0.1",
"react": "16.0.0",
"react-addons-shallow-compare": "15.6.0",
"react-dates": "12.7.0",
"react-dom": "16.0.0",
"react-modal": "3.8.1",
"react-redux": "5.0.5",
"react-router-dom": "5.0.0",
"redux": "4.0.1",
"sass-loader": "7.1.0",
"style-loader": "0.23.1",
"uuid": "3.3.2",
"validator": "8.0.0",
"webpack": "3.1.0",
"webpack-dev-server": "2.5.1"