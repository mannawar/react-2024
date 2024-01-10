import {useState} from 'react';
import {useContext} from 'react';
import {AppContext} from '../App';

export const ChangeProfile = (props) => {
    const [newUserName, setNewUserName] = useState("");
    const {setName} = useContext(AppContext)
    return (
        <div>
            <input onChange={((event) => {
                setNewUserName(event.target.value);
            })}/>
            <button onClick={() => setName(newUserName)}>Change User Name</button>
        </div>
    )
}