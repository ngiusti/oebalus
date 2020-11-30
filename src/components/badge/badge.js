import React from "react";

import { ReactComponent as HelmetLogo } from "../../assets/images/helmet-logo.svg";

import "./badge.scss";

const Badge = () => (
    <div className="logo-wrap">
        <HelmetLogo className="logo" />
        <h4 className="logo-name">OEBALUS</h4>
    </div>
);

export default Badge;