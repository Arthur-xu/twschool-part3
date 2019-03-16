import React from 'react'

import CONSTANT from '../../constant/other.constant'
import URL from '../../constant/http.constant'

import './CreateSchool.scss'
import commonFun from '../../common/commonFun'

import { Typography, Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom'
const { Title } = Typography;
const { TextArea } = Input;



export default class CreateSchool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            describe: '',
            canInput: true,
            whetherGotoList: false,
        }
    }

    backToList = () => {
        console.log('should go to list');
        // this.props.history.push('/InstitutionList')
        this.setState({ whetherGotoList: true })
    }

    doSave = () => {
        const params = {
            title: this.state.title,
            describe: this.state.describe
        };

        const sucFun = (response) => {
            console.log('should go to list');
            message.success('This is a message of success');
            this.backToList();
        }

        const failFun = (error) => {
            console.log(error);
            message.error('This is a message of error');
        }

        commonFun.createRequest({ URL: URL.create, params, method: 'POST', sucFun, failFun });
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
