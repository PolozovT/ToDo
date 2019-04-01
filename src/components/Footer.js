import React from 'react'

const styles = {
    textAlign: "center",
    color: "purple"
}

function Footer(props) {
    return (
        <footer>
            <h3 style={styles}>{props.description}</h3>
        </footer>
    )
}

export default Footer