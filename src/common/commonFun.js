export default {
    getList({ URL, sucFun, failFun }) {
        fetch(URL)
            .then(res => res.json())
            .then(response => {
                sucFun(response);
            }).catch(error => {
                failFun(error);
            })
    },
    createRequest({ URL, params, method, sucFun, failFun }) {
        fetch(URL, {
            method,
            body: `title=${params.title}&content=${params.content}`
            ,
            headers: new Headers({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            credentials: 'include'
        }).then(res => res.json())
            .then(response => {
                sucFun(response);
            }).catch(error => {
                failFun(error);
            })

    }
}