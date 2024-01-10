import {useState} from 'react';


export const ChangeProfile = (props) => {
    const [ setNewUserName] = useState("");

    return (
        <div>
            <input onChange={((event) => {
                setNewUserName(event.target.value);
            })}/>
            <button onClick={() => console.log("Alhamdulillah")}>Change User Name</button>
        </div>
    )
}