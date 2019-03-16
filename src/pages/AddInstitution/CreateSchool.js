import React from 'react';
import CONSTANT from '../../constant/other.constant';
import URL from '../../constant/http.constant';
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
        return (
            <div className="App">
                <div ><button onClick={this.backToList}>返回</button></div>
                <h3>创建训练营</h3>
                <div>
                    <div>
                        标题：
                <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                    </div>
                    <div>
                        描述：
                <textarea value={this.state.describe} onChange={this.handleTextareInput}></textarea>
                        <span style={{ display: this.state.canInput ? 'none' : 'inline-block' }}>最多{CONSTANT.MAX_LENGTH}个字</span>
                        <span>{this.state.describe.length}/{CONSTANT.MAX_LENGTH}</span>
                    </div>
                </div>
                <div>
                    <button onClick={this.backToList}>取消</button>
                    <button onClick={this.doSave}>保存</button>
                </div>
            </div>
        );
    }
}