import React, { Component } from 'react'
import { ReactComponent as AddButton } from '../../assets/imgs/2.svg'
import { Link } from 'react-router-dom'

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
    // const institutionList = await
    this.setState({
      InstitutionList: [
        {
          header: '敏捷训练营',
          desc:
            '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。'
        },
        {
          header: '敏捷训练营',
          desc:
            '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。'
        },
        {
          header: '敏捷训练营',
          desc:
            '京东敏捷实战特训，京东内部的高绩效团队培训，真正的敏捷培训，为你深度分享用户故事、敏捷估算、敏捷项目计划及跟踪（任务看板，每日会议）等敏捷实践。'
        }
      ]
    })
  }

  render() {
    const { InstitutionList } = this.state

    return (
      <div className="institution-list">
        <div className="toolbar">
          <div className="search-container">
            <input type="text"/>
            <div className="search-button">搜索</div>
          </div>
        </div>
        <div className="card-list">
          <NewInstitutionCard />
          {InstitutionList.map((item, index) => {
            return (
              <InstitutionInfoCard
                key={index}
                header={item.header}
                desc={item.desc}
                handleOnClick={() => console.log('click')}
              />
            )
          })}
        </div>
      </div>
    )
  }
}
