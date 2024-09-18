import React from 'react';
import logo from './logo.svg';
import '../assets/css/style.css';
import './SponsorLogoEntry.css';
import { Link } from "react-router-dom";


const Footer = (props: any) => {
    const { sponsorNameCn, sponsorNameEn, linkPath, imageSrc } = props;
    return (
        <div className="team-page-display-flex" style={{ marginTop: "20px" }}>
            <span style={{alignContent: "center"}}><p className="sponsorlogoentry_fs_lg sponsorlogoentry_fs_xl">
                {linkPath ? <span><Link to={linkPath}>{sponsorNameCn}</Link> <Link to={linkPath}>{sponsorNameEn}</Link></span> : <span><span>{sponsorNameCn}</span> <span className='sponsorlogoentry_txt_wrap_sm sponsorlogoentry_txt_wrap_md'>{sponsorNameEn}</span></span>}
                
            </p></span>
            <span><img src={imageSrc} alt="" className="sponsorlogoentry_h45_sm sponsorlogoentry_h45_md sponsorlogoentry_h50_lg sponsorlogoentry_h50_xl sponsorlogoentry_img_fr_sm sponsorlogoentry_img_fr_md" /></span>
        </div>
    );
}

export default Footer;
