import React, { Component } from 'react';

export default class InstituationList extends Component {
    constructor(props){
        super(props);
        this.state = {
            aaa: ''
        }
    }
    componentDidMount(){
        this.initData();
    }
    initData = async () => {
        // const institutionList = await 
    }
    render (){
        return <div>
            NavLink
        </div>
    }
}