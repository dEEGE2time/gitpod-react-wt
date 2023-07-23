import React from "react";


const FunctionalGreetingWithProps = (props) => {
    console.log(props);
    return <h2>Hello, {props.name}! I see you're {props.age} years old; {props.greeting}!</h2>;
}

export default FunctionalGreetingWithProps;