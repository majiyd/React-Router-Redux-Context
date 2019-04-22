import React from 'react'
import styles from "../styles/Home.module.css"

export default class Home extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h1 className={styles.large}>Home</h1>
                <p className={styles.large}> We are mobile first</p>
            </React.Fragment>
        )
    }
}
