import React from 'react';
import FooterChart from './footerChart';

const Footer = (props) => {
    const {data, postHideData, postVotes} = props;

    return (<React.Fragment>
            <footer className="footer-section">
                <div className="orange-separator"></div>
                <div className="chart-section">
                    <FooterChart 
                        data={data} 
                        postHideData={postHideData} 
                        postVotes={postVotes}
                    />
                </div>
            </footer>
        </React.Fragment>);
};

export default Footer;