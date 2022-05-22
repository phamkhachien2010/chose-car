import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state={
        imgProduct :require('../assets/CarImg/products/black-car.jpg')
    }

    renderCar=(imgNewProduct)=>{
        let newState = {
            imgProduct : imgNewProduct
        }

        this.setState(newState);
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className="row">
                    <div className="col-7">
                        <img className='img-fluid' src={this.state.imgProduct} alt="blackCar" />
                    </div>
                    <div className="col-5">
                        <div className="card text-dark">
                            <div className="card-header text-primary">Exterior Color</div>
                            <div className="card-body">
                                <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../assets/CarImg/products/black-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img className='col-2 p-0' src={require("../assets/CarImg/icons/icon_black.png")} alt="black-icon" />
                                    <div className="col-10">
                                        <h3>Crystal Black</h3>
                                        <p>Pearl</p>
                                    </div>
                                </div>
                                <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../assets/CarImg/products/red-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img className='col-2 p-0' src={require("../assets/CarImg/icons/icon_red.png")} alt="black-icon" />
                                    <div className="col-10">
                                        <h3>Modern Steel</h3>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                                <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../assets/CarImg/products/silver-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img className='col-2 p-0' src={require("../assets/CarImg/icons/icon_silver.jpg")} alt="black-icon" />
                                    <div className="col-10">
                                        <h3>Lunar Silver</h3>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                                <div className="row border border-link pt-2 pb-2 mt-2" onClick={()=>{this.renderCar(require('../assets/CarImg/products/steel-car.jpg'))}} style={{cursor:'pointer'}}>
                                    <img className='col-2 p-0' src={require("../assets/CarImg/icons/icon_steel.jpg")} alt="black-icon" />
                                    <div className="col-10">
                                        <h3>Rallye Red</h3>
                                        <p>Metallic</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
