import React, { Component } from 'react'

export default class RenderWihLoop extends Component {

    productList = [
        { id: 1, name: 'black-car', price: 1000, img: './CarImg/products/black-car.jpg' },
        { id: 2, name: 'red-car', price: 1000, img: './CarImg/products/red-car.jpg' },
        { id: 3, name: 'silver-car', price: 1000, img: './CarImg/products/silver-car.jpg' },
        { id: 4, name: 'steel-car', price: 1000, img: './CarImg/products/steel-car.jpg' },
    ]

    renderTable = () => {
        //CÁCH 1 DÙNG FOR
        // let mangTrComponent = [];
        // for (let i = 0; i < this.productList.length; i++) {
        //     let product = this.productList[i];
        //     //Đối tượng jsx
        //     let trJSX = <tr key={i}>
        //         <td>{product.id}</td>
        //         <td>{product.name}</td>
        //         <td>{product.price}</td>
        //         <td><img style={{width:'100px'}} src={product.img} alt='black-car' /></td>
        //         <td></td>
        //     </tr>
        //     mangTrComponent.push(trJSX);
        // }
        // return mangTrComponent;

        //CÁCH 2 DÙNG MAP
        return this.productList.map((product, index)=>{
            return <tr key={index}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td><img style={{width:'100px'}} src={product.img} alt={product.id} /></td>
                <td></td>
            </tr>
        })
    }


    render() {
        return (
            <div className='container'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Img</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTable()}                      
                    </tbody>
                </table>
            </div>
        )
    }
}
