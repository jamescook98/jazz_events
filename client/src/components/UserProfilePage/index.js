import React from 'react';
import "./styles.css";
// const currentPassRef = useRef();
// const errorMsgRef = useRef();
// const [currentPass, setCurrentPass] = useState("");
// const [errorMsg, setErrorMsg] = useState("");

// if (currentPass.current.value !== props.password) {
//     setErrorMsg("Current password is incorrect.")
// }


//get user info by id

//if newUsername == props.username, error "That already IS your username"
//if newUsername already exists in database && is !== props.username, error "That username is already taken."
//if after debounce (currentPass.current.value !== props.password), set span to "Current password is incorrect."
//if (newEmail does not take the form ("letters/numbers/-/. not ending in -/."+"@"+"letters/numbers/-/. not ending in -/."+"."+"letters")), set span to "must be a valid email"
//if after debounce (newPassword.current.value !== reenterNewPassword), set span to "Passwords do not match."

//userID will be passed in. Fetch user info from database using ID. Store user info in "state"

const updateSettings = (event) => {
    //event.target.username.value will give you whats inside the field named "username"(line 41(right now))
}

export default function UserProfilePage() {

    return (
        <div>
            <form onSubmit={updateSettings}>
            <h1>User Settings</h1>
                <div className="form-group">
                    <h3 className="heading">Change Email</h3>
                    <b>Current email: </b> taher@taher.com <br/>
                    <label for="newEmail">New email:</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="newEmail" 
                        name="email"
                        placeholder="user@email.com"
                        />
                </div>
                <div className="form-group">
                    <h3 className="heading">Change Username</h3>
                    <b>Current username: </b> taher <br/>
                    <label for="newUsername">New username:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="newUsername" 
                        name="username"
                        placeholder="Enter new username"
                        />
                </div>
                <div className="form-group">
                    <h3 className="heading">Change Password</h3>
                    <label for="currentPassword">Current password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="currentPassword" 
                        name="currentPassword"
                        placeholder="Enter current password"
                        minlength="8"
                        />
                    <span id="currentPasswordTest" ></span>
                    <label for="newPassword">New password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="newPassword" 
                        name="newPassword"
                        placeholder="Enter new password"
                        minlength="8"
                        />
                    <label for="reenterNewPassword">Reenter new password:</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="reenterNewPassword" 
                        name="reenterNewPassword"
                        placeholder="Reenter new password"
                        minlength="8"
                        />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );

}