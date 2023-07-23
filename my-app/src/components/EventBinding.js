import React from 'react';

class EventBinding extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: 'Hello!',
            buttonText: 'Exit',
            count: 0,
        };
    }


    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                introduction: prevState.introduction === 'Hello!' ? 'Goodbye!' : 'Hello!',
                buttonText: prevState.buttonText === 'Exit' ? 'Enter' : 'Exit',
            }
        })
    }


    incrementOne() {
        this.setState((prevState, prevProps) => {
            console.log('Previous State:', prevState)
            console.log('Previous Props:', prevProps)
            return {
                count: prevState.count + 1
            }
        })
    }

    incrementFive() {
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
        this.incrementOne()
    }


    render() {
        return (
            <div>
                <h2>{this.state.introduction} {this.props.greeting} -{this.props.name}</h2>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementOne()}>Increment One</button>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
                <p>You've clicked {this.state.count} times.</p>
            </div>
        
        )
    }
}

export default EventBinding;