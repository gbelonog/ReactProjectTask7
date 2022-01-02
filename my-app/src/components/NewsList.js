import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { NewsItem } from "./NewsItem";
// import { gsap } from 'gsap';
// import './newsList.css';

export class NewsList extends Component {

  render() {
    const { news, onRemoveNewsItem } = this.props;
    return (
        <div>
          {news.map(el => (
            <div key={el.id} >
              <NewsItem
                onRemoveNewsItem={onRemoveNewsItem}
                newsItem={el}
              />
            </div>
          ))}
        </div>
    );
  }
}

export default NewsList;

NewsList.propTypes = {
  news: PropTypes.array,
  onRemoveNewsItem: PropTypes.func.isRequired,
};

NewsList.defaultProps = {
  news: [],
};