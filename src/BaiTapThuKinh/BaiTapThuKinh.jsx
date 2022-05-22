import React, { Component } from 'react'
import dataGlass from '../Data/dataGlasses.json'
import style from './BaitapThuKinh.module.css'

export default class BaiTapThuKinh extends Component {

    renderListGlasses = () => {
        return dataGlass.map((glasses, index) => {
            return <div onClick={() => { this.changeGlasses(glasses) }} className="col-4" style={{ cursor: 'pointer' }} key={index}>
                <img style={{ width: '100px' }} src={glasses.url} alt={glasses.name} />
            </div>
        })
    }

    state = {
        glassesOverlay: {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    }

    changeGlasses = (newGlasses) => {
        this.setState({
            glassesOverlay: newGlasses
        })
    }


    render() {

        // Vif keyframe chỉ chạy 1 lần nên cần phải định nghĩa lại tên của keyframe bằng cách thêm giờ trực tiếp. giờ luôn thay đổi tăng lên nên mỗi lần load keyframe sẽ là 1 keyframe mới
        const keyFrame = ` @keyframes animChangeGlasses${Date.now()} {
            from {
                width: 0;
                transform: rotate(-45deg);
                opacity:0;
            }
            to {
                width: 300px;
                opacity:0.7;
                transform: rotate(0deg);
            }
        }`

        const GlassesStyle = {
            position: 'absolute',
            opacity: '0.7',
            top: '25%',
            left: '19%',
            width: '300px',
            transform: 'rotate(0deg)',
            animation: `animChangeGlasses${Date.now()} 1s`,
        }

        return (
            <div className='container-fluid'>
                <div className={style.content}>
                    {/* Gắn keyFrame trong component để khi giao diện load lên keyFrame được chạy (bằng thẻ style) */}
                    <style>
                        {keyFrame}
                    </style>
                    <div className={style.bg__overlay}>
                        <div className={style.header}>
                            <h1 style={{ lineHeight: '70px', color: 'white' }}>TRY GLASSES APP ONLINE</h1>
                        </div>
                        <div className="model container d-flex" style={{ justifyContent: 'space-between' }}>
                            <div className={style.model__item}>
                                <div className="glasses__overlay">
                                    <img style={GlassesStyle} src={this.state.glassesOverlay.url} alt="" />
                                    <div className={style.glasses__info}>
                                        <h3>{this.state.glassesOverlay.name}</h3>
                                        <p>{this.state.glassesOverlay.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="model__right">
                                <img src="./glassesImage/model.jpg" alt="" />
                            </div>
                        </div>
                        <div className="glasses container text-center" style={{ backgroundColor: 'white', margin: '50px auto' }}>
                            <div className="row" style={{ alignItems: 'center' }}>
                                {this.renderListGlasses()}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
