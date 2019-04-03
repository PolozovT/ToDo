import React from 'react'

const styles = {
    margin: "auto",
    color: "purple"
}

class Footer extends React.Component{
    render() {

    return (
        <footer>
            <h3 style={styles}>{this.props.description}</h3>
        </footer>
    )

    }
}

export default Footer