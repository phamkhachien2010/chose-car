import React, { Component } from 'react'
import style from './BaitapRenderFilm.module.css';
import dataFilm from '../Data/DataFilms.json';

export default class BaitapRenDerFilm extends Component {

    renderColFilm = () => {
        return dataFilm.map((film, index) => {
            return <div className="col-2" key={index}>
                <div className={style.film__item}>
                    <img src={film.hinhAnh} alt={film.tenPhim} />
                    <h2 style={{height:'50px',fontSize:'20px'}}>{film.tenPhim}</h2>
                    <p>{film.moTa.length>70 ? <p>{film.moTa.substr(0,70)}...</p>:<p>{film.moTa}</p>}</p>
                </div>
            </div>
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <div className={style.content}>
                    <div className={style.overlay}>
                        <nav className="navbar navbar-expand-sm navbar-dark" style={{ backgroundColor: 'rgba(87,83,149,0.8)' }}>
                            <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Link</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                                            <a className="dropdown-item" href="#">Action 1</a>
                                            <a className="dropdown-item" href="#">Action 2</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="row">
                            {this.renderColFilm()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
