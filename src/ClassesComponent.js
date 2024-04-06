import {Component} from 'react'
class ClassesComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {achievement: "В мене вийшло створити перший класовий компонент"}
    }

    render() {
        return(
            <div>
                <h1>{this.state.achievement}</h1>
            </div>
        )
    }
}

export default ClassesComponent;