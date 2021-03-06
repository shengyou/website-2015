import React, { Component } from 'react';

class List extends Component {

  render() {
    const sponsors = this.props.data.map((sponsor, index) => {
      return (
        <div key={index} className="sponsor pure-u-1-2 pure-u-md-1-3">
          <a href={sponsor.link} target="_blank">
            <div className="sponsor-in">
              <div className={sponsor.categoryclass}>
                <i className={sponsor.iconclass}></i> {sponsor.categoryname}
              </div>
              <img src={sponsor.logo} className={sponsor.classname} title={sponsor.name} />
              <div className="intro" title={sponsor.intro}>
                {sponsor.intro}
              </div>
            </div>
          </a>
        </div>
      );
    });

    return (
      <div className="sponsors">
        {sponsors}
      </div>
    );
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default List;
