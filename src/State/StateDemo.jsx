import React, { Component } from 'react'

export default class StateDemo extends Component {

    //state là thuộc tính có sẵn của react class component giúp định nghĩa những nội dung có khả năng thay đổi khi người dùng thao tác sự kiện
    state={
        status : false
    }
    //setState là phương thức có sẵn của react component giúp tahy đổi giá trị state và render lại giao diện

    userLogin ={
        name: 'Pham Khac Hien',
        age: 24
    }

    login = ()=>{
        let newState = {
            status :true,
        }
        //gọi phương thức setState => truyền vào state mới
        //setState là phương thức bất đồng bộ
        this.setState(newState,()=>{
            //callback thực thi sau khi state thay đổi
            console.log(this.state);//lúc này trả về true
        })
        console.log(this.state);//lúc này trả về false
    }

    renderUserlogin =()=>{
        if(this.state.status){
            return <div className='text-center'>{this.userLogin.name}</div>
        }
        return <button onClick={()=>{this.login()}}>Login</button>
    }

    render() {
        return (
            <div>
                {this.renderUserlogin()}
            </div>
        )
    }
}
