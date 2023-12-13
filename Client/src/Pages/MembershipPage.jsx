import React from 'react';
import { Link } from 'react-router-dom';

const MembershipPage = () => {
    return (
        <>
            <h1 className="head">Membership</h1>

            <div className="membershipcontainer">

                <div className="memboxes">
                    <h1 className="head">Day Pass Membership</h1>
                    <p className="price">$20</p>
                    <p className="descriptionofpurchase">Each Day</p>
                    <p className="descriptionofmem">Day-by-day access without a long term commitment</p>
                    <Link to="https://clients.mindbodyonline.com/ASP/su1.asp?studioid=156543&tg=&vt=&lvl=&stype=&view=&trn=0&page=&catid=&prodid=&date=12%2f13%2f2023&classid=0&prodGroupId=&sSU=&optForwardingLink=&qParam=&justloggedin=&nLgIn=&pMode=0&loc=1">
                        <button className="action_btn1">Join Now</button>
                    </Link>
                </div>

                <div className="memboxes">
                    <h1 className="head">One Week Membership</h1>
                    <p className="price">$35</p>
                    <p className="descriptionofpurchase">Each Week</p>
                    <p className="descriptionofmem">Week-by-week payment without a longer term commitment</p>
                    <Link to="#">
                        <button className="action_btn1">Join Now</button>
                    </Link>
                </div>

                <div className="memboxes">
                    <h1 className="head">One Month Membership</h1>
                    <p className="price">$80</p>
                    <p className="descriptionofpurchase">Each Month</p>
                    <p className="descriptionofmem">Stick around for a bit with a monthly commitment</p>
                    <Link to="#">
                        <button className="action_btn1">Join Now</button>
                    </Link>
                </div>

                <div className="memboxes">
                    <h1 className="head">Two Month Membership</h1>
                    <p className="price">$140</p>
                    <p className="descriptionofpurchase">Every Two Months</p>
                    <p className="descriptionofmem">Two months worth of membership</p>
                    <Link to="#">
                        <button className="action_btn2">Join Now</button>
                    </Link>
                </div>

                <div className="memboxes">
                    <h1 className="head">Three Month Membership</h1>
                    <p className="price">$195</p>
                    <p className="descriptionofpurchase">Every Three Months</p>
                    <p className="descriptionofmem">A full season worth of membership</p>
                    <Link to="#">
                        <button className="action_btn3">Join Now</button>
                    </Link>
                </div>

                <div className="memboxes">
                    <h1 className="head">Annual Membership</h1>
                    <p className="price">$60</p>
                    <p className="descriptionofpurchase">Each Month</p>
                    <p className="descriptionofmemannual">Full year access our most popular plan<br />*$79 initiation fee at contract signing + first and last monthly fees paid up front*</p>
                    <Link to="#">
                        <button className="action_btn4">Join Now</button>
                    </Link>
                </div>

            </div>
        </>
    );
}

export default MembershipPage;

