import React from 'react';
import logo from './logo.svg';
import externalImg1 from '../assets/images/external_img1.jpeg';
import externalImg2 from '../assets/images/external_img2.jpg';
import externalImg3 from '../assets/images/external_img3.jpg';
import streamImg4 from '../assets/images/stream_img4.jpg'
import streamImg5 from '../assets/images/stream_img5.jpg'
import streamImg6 from '../assets/images/stream_img6.jpg'
import '../assets/css/style.css';
import './Articles.css';
import { Link } from "react-router-dom";

function Articles() {
    return (
        <div className="container_12 articles_display_none_lg articles_display_none_xl">
            <div className="grid_12">
                <div className="grid_12-xs grid_12-sm grid_12-md grid_12-lg grid_12-xl">
                    <div className="box-3">
                        <div className="gradient_1"><h2><a href="https://muimp.xet.tech/s/2ODa6M" target="_blank" rel="noopener noreferrer">▶ 男子组直播</a></h2></div>
                        <div className="box-3_pad">

                            <div className="wrapper">
                                <div className="box">
                                <a href="https://muimp.xet.tech/s/2ODa6M" target="_blank" rel="noopener noreferrer"><img src={streamImg4} /></a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Articles;
