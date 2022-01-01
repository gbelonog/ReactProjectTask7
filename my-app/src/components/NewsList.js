import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { NewsItem } from "./NewsItem";
// import { gsap } from 'gsap';
// import './newsList.css';

export class NewsList extends Component {
  // newsCardEl = createRef();
  // componentDidMount(){
  //   let newsCard = this.newsCardEl.current;
  //   //let timeline = gsap.timeline();

  //   //let newsCardTransition = gsap.fromTo(newsCard, {
  //   gsap.fromTo(newsCard, {
  //     opacity: 0,
      
  //   }, {
  //     opacity: 1,
  //     duration: 3,
  //   });
  //   //timeline.add(newsCardTransition);
  // }

  render() {
    const { news, onRemoveNewsItem } = this.props;

    return (
        <div>
          {news.map(el => (
            // <div className="NewsItem" key={el.id} ref={this.newsCardEl}>
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