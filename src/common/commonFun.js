import { message, Button } from 'antd';
import URL from '../constant/http.constant';

export default {
    createRequest({ URL, params, method, sucFun, failFun }) {
        fetch(URL, {
            method,
            body: params,
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
            .catch(error => {
                failFun(error);
            }).then(response => {
                sucFun(response);
            })
    }
}