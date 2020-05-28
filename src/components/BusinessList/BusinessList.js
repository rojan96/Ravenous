import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        try {
            return (
                <div className="BusinessList">
                    {this.props.businesses.map(business =>
                        <Business business={business} />
                        )}
                </div>
            );
        } catch (error) {
            return (<div> Nothing found. </div>)
        }
    }   
}

export default BusinessList;