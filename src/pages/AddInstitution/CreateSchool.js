import React from 'react'

import CONSTANT from '../../constant/other.constant'
import URL from '../../constant/http.constant'

import './CreateSchool.scss'
import commonFun from '../../common/commonFun'

import { Form, Input, message } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom'
const { TextArea } = Input;

export default class CreateSchool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            describe: '',
            canInput: true,
        }
    }

    backToList = () => {
        this.props.history.push('/InstitutionList');
    }

    doSave = () => {
        if (!this.state.title || !this.state.describe) {
            return message.warning('标题或描述均不能为空')
        }

        if (this.state.title.length > 20) {
            return message.warning('标题长度需要小于20')
        }

        if (this.state.describe.length > 300) {
            return message.warning('描述最多300个字')
        }

        function isNull(str) {
            if (str == "") return true;
            var regu = "^[ ]+$";
            var re = new RegExp(regu);
            return re.test(str);
        }

        if (isNull(this.state.title)) {
            return message.warning('请输入标题')
        }

        const params = {
            title: this.state.title,
            content: this.state.describe
        };

        const sucFun = (response) => {
            message.success('创建训练营成功');
            setTimeout(() => {
                this.backToList();
            }, 500);
        }

        const failFun = (error) => {
            message.error('创建训练营失败');
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
        return (
            <div className="create-school">

                <div className="back-button">
                    <Link to="/InstitutionList">返回</Link>
                </div>

                <h3 className="title">创建训练营</h3>
                <Form>
                    <Form.Item label="标题">
                        <Input value={this.state.title} onChange={this.handleTitleChange} />
                    </Form.Item>
                    <Form.Item label="描述">
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
                        <div className="submit-button" onClick={this.doSave}>保存</div>
                    </div>
                </div>
            </div>
        )
    }
}
