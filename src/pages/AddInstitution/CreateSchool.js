import React from 'react'

import CONSTANT from '../../constant/other.constant'
import URL from '../../constant/http.constant'

import './CreateSchool.scss'

import { Link } from 'react-router-dom'

import { Form, Input } from 'antd'
const { TextArea } = Input

export default class CreateSchool extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      describe: '',
      canInput: true
    }
  }

  doSave = () => {
    const params = {}
    fetch(URL, {
      method: 'POST',
      body: params,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    })
      .then(res => res.json())
      .catch(error => {
        console.log(error)
      })
      .then(response => {
        console.log(response)
      })
  }

  handleTextareInput = event => {
    this.setState({
      canInput: event.target.value.length < CONSTANT.MAX_LENGTH
    })
    if (this.state.canInput) {
      this.setState({
        describe: event.target.value
      })
    }
  }

  handleTitleChange = event => {
    this.setState({
      title: event.target.value
    })
  }

  render() {
    const { formLayout } = this.state
    const formItemLayout =
      formLayout === 'horizontal'
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 }
          }
        : null
    const buttonItemLayout =
      formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 14, offset: 4 }
          }
        : null
    return (
      <div className="create-school">
        <div className="back-button">
          <Link to="/InstitutionList">返回</Link>
        </div>
        <h3 className="title">创建训练营</h3>
        <Form>
          <Form.Item label="标题" {...formItemLayout}>
            <Input value={this.state.title} onChange={this.handleTitleChange} />
          </Form.Item>
          <Form.Item label="描述" {...formItemLayout}>
            <TextArea
              value={this.state.describe}
              onChange={this.handleTextareInput}
            />
            <span
              style={{ display: this.state.canInput ? 'none' : 'inline-block' }}
            >
              最多{CONSTANT.MAX_LENGTH}个字
            </span>
            <span>
              {this.state.describe.length}/{CONSTANT.MAX_LENGTH}
            </span>
          </Form.Item>
        </Form>
        <div className="footer">
          <div className="button-container">
            <Link to="/InstitutionList" className="cancel-button">
              取消
            </Link>
            <div className="submit-button">保存</div>
          </div>
        </div>
      </div>
    )
  }
}
