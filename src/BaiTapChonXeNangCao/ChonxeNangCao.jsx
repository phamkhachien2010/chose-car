import React, { Component } from 'react'
import './ChonxeNangCao.css'
import dataFeatures from '../Data/arrayFeatures.json'
import dataWheel from '../Data/wheels.json'

export default class ChonxeNangCao extends Component {

    //tạo state chưa thông tin xe thay đổi
    state = {
        carCurrent: {
            id: 1,
            title: "Crystal Black",
            type: "Pearl",
            img: "./images/icons/icon-black.jpg",
            srcImg: "images-black/images-black-1/",
            color: "Black",
            price: "19,550",
            engineType: "In-Line 4-Cylinder",
            displacement: "1996 cc",
            horsepower: "158 @ 6500 rpm",
            torque: "138 lb-ft @ 4200 rpm",
            redline: "6700 rpm",
            wheels: [
                {
                    idWheel: 1,
                    srcImg: "images-black/images-black-1/"
                },
                {
                    idWheel: 2,
                    srcImg: "images-black/images-black-2/"
                },
                {
                    idWheel: 3,
                    srcImg: "images-black/images-black-3/"
                }
            ]
        }
    }

    changeCarColor = (newCar) => {
        this.setState({
            carCurrent: newCar
        })
    }


    renderIcon = () => {
        return dataFeatures.map((item, index) => {
            return <div style={{ cursor: 'pointer' }} onClick={()=>{this.changeCarColor(item)}} className='row m-3 border border-color-default' key={index}>
                <div className="col-2">
                    <img className='img-fluid' src={item.img} alt={item.type} />
                </div>
                <div className="col-10">
                    <h5>{item.title}</h5>
                    <p>{item.type}</p>
                </div>
            </div>
        })
    }

    changeWheel = (newWheel)=>{
        //Tìm trong state hiện tại nhwungx thuộc tính của wheel 
        let obWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheel.idWheel);
        if(obWheel!==-1){
            //Lấy ra src hình ảnh từ this.state.carCurrent.wheels
            this.setState({
                carCurrent:{...this.state.carCurrent,srcImg:obWheel.srcImg}
            })
        }
    }

    renderWheel = () => {
        return dataWheel.map((item, index) => {
            return <div onClick={()=>{this.changeWheel(item)}} style={{ cursor: 'pointer' }} className='row m-3 border border-color-default' key={index}>
                <div className="col-2">
                    <img className='img-fluid' src={item.img} alt={item.type} />
                </div>
                <div className="col-10">
                    <h5>{item.title}</h5>
                </div>
            </div>
        })
    }

    componentDidMount = () => {
        //Là phương thức có sẵn tự động thực thi sau khi render được gọi. lưu ý componentDidMount chỉ chạy 1 lần đầu tiên sau khi render thực thi
        let tagScript = document.createElement('script');

        tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.7.1/js-cloudimage-360-view.min.js';


        document.getElementById('appendScript').appendChild(tagScript);

    }

    componentDidUpdate=()=>{

        //Bởi vì khi chạy hàm này sẽ tạo ra 1 thẻ canvas mới nhưng ko xoá thẻ canvas cũ nên sẽ xuất hiện nhiều hình
        //nên xét html trong thẻ này bằng rỗng để tạo thẻ canvas mới
        document.getElementById("carCurrent").innerHTML='';

        let tagScript = document.createElement('script');

        tagScript.src = 'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';

        document.getElementById('appendScript').innerHTML=''
        document.getElementById('appendScript').appendChild(tagScript);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-6">
                        <div className="model">
                            {/* <img className='img-fluid' src="./CarImg/images-black/images-black-1/civic-1.jpg" alt="" /> */}
                            <div id='carCurrent' className="cloudimage-360" data-folder={"./CarImg/"+this.state.carCurrent.srcImg} data-filename="civic-{index}.jpg" data-amount="8"></div>
                            {/* Vì thẻ div className = 'cloudimage-360' cần ơhair có thẻ script của thư viện thì mới chạy được hiệu ứng nên cần phải thêm script bên dưới div này */}
                            <div id='appendScript'>

                            </div>
                        </div>
                        <div className="card mt-2">
                            <h3 className="card-header ">
                                Exterior color
                            </h3>
                            <table className="table border border-color-light" border='1'>
                                <tr>
                                    <th>Color</th>
                                    <th>Black</th>
                                </tr>
                                <tr>
                                    <th>Price</th>
                                    <th> $ 12.000</th>
                                </tr>
                                <tr>
                                    <th>Engine Type</th>
                                    <th>In-line-4-cylineder</th>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <div className="col-6">
                        <div class="card text-left">
                            <h4 className="card-header">Exterior color</h4>
                            <div className="container-fluid">
                                {this.renderIcon()}
                            </div>
                        </div>
                        <div class="card text-left">
                            <h4 className="card-header">Wheels</h4>
                            <div className="container-fluid">
                                {this.renderWheel()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
