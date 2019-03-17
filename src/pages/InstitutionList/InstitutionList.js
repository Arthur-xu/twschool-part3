import React, { Component } from 'react'
import { ReactComponent as AddButton } from '../../assets/imgs/2.svg'
import { Link } from 'react-router-dom'
import instituteApi from '../../apis/instituteApi'

import './Institution.scss'

function NewInstitutionCard(props) {
  return (
    <Link to="/AddInstitution">
      <div className="card-container new-card">
        <div className="add-button">
          <AddButton />
        </div>
        <span className="desc">创建训练营</span>
      </div>
    </Link>
  )
}

function InstitutionInfoCard(props) {
  return (
    <div className="card-container info-card" onClick={props.handleOnClick}>
      <h3>{props.header}</h3>
      <div className="desc">{props.desc}</div>
    </div>
  )
}

export default class InstituationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      InstitutionList: []
    }
  }
  componentDidMount() {
    this.initData()
  }
  initData = async () => {
    const InstitutionList = await instituteApi
      .getInstituteList()
      .then(req => req.data)
      .catch(error => {
        console.log(error)
      })
    this.setState({
      InstitutionList
    })
  }

  render() {
    const { InstitutionList } = this.state

    return (
      <div className="institution-list">
        <div className="toolbar">
          <div className="search-container">
            <input type="text" />
            <div className="search-button">搜索</div>
          </div>
        </div>
        <div className="card-list">
          <NewInstitutionCard />
          {InstitutionList.map((item, index) => {
            return (
              <InstitutionInfoCard
                key={index}
                header={item.title}
                desc={item.content}
                handleOnClick={() => console.log('click')}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
