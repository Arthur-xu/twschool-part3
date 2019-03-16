import React from 'react';

import CONSTANT from '../../constant/other.constant';
import URL from '../../constant/http.constant';

import { Typography, Form, Input, Button } from 'antd';
const { Title } = Typography;
const { TextArea } = Input;


export default class CreateSchool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            describe: '',
            canInput: true
        }
    }

    backToList = () => {
        console.log(111)
    }

    doSave = () => {
        const params = {}
        fetch(URL, {
            method: 'POST',
            body: params,
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => {
                console.log(error)
            }).then(response => {
                console.log(response)
            })
    }

    handleTextareInput = (event) => {
        this.setState({
            canInput: event.target.value.length < CONSTANT.MAX_LENGTH
        })
        if (this.state.canInput) {
            this.setState({
                describe: event.target.value
            })
        }
    }

    handleTitleChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    render() {

        const { formLayout } = this.state;
        const formItemLayout = formLayout === 'horizontal' ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        } : null;
        const buttonItemLayout = formLayout === 'horizontal' ? {
            wrapperCol: { span: 14, offset: 4 },
        } : null;
        return (
            <div className="App">
                <div><Button type="primary" onClick={this.backToList}>返回</Button></div>
                <Title level={3}>创建训练营</Title>

                <Form layout={formLayout}>
                    <Form.Item
                        label="标题："
                        {...formItemLayout}
                    >
                        <Input value={this.state.title} onChange={this.handleTitleChange} placeholder="input placeholder" />
                    </Form.Item>
                    <Form.Item
                        label="描述：¡"
                        {...formItemLayout}
                    >
                        <TextArea value={this.state.describe} onChange={this.handleTextareInput} placeholder="Autosize height with minimum and maximum number of lines" autosize={{ minRows: 2, maxRows: 6 }} />
                        <span style={{ display: this.state.canInput ? 'none' : 'inline-block' }}>最多{CONSTANT.MAX_LENGTH}个字</span>
                        <span>{this.state.describe.length}/{CONSTANT.MAX_LENGTH}</span>
                    </Form.Item>
                    <Form.Item {...buttonItemLayout}>
                        <Button onClick={this.backToList} type="primary">取消</Button>
                        <Button onClick={this.doSave} type="primary">保存</Button>
                    </Form.Item>
                </Form>


            </div >
        );
    }
}