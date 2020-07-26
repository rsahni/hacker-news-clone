import React from 'react';

const Header = (props) => {
    return(
        <header data-testid="header">
            <div className="hn-header-section">
                <div className="site-title-mobile"><h1>HN Clone Rahul</h1></div>
                <div className="hn-header-item-list">
                    <div className="hn-header-item first-column">Comments</div>
                    <div className="hn-header-item second-column">View Count</div>
                    <div className="hn-header-item third-column">UpVote</div>
                    <div className="hn-header-item fourth-column">News Details</div>
                </div>
            </div>
        </header>
    );
};

export default Header;