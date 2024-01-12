export const Person = (props) => {
    return (
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Email: {props.email}</h1>
            <h1>Age:{props.age}</h1>
            <h1>This person {props.isMarried ? "is": "is not"} married</h1>
            {props.friends.map((friend, index) => (
                <h1 key={index}>{friend}</h1>
            ))}
        </div>
    )
}