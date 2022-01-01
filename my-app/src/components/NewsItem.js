import React, { Component,  createRef}from 'react';
import PropTypes from 'prop-types';
import { gsap } from 'gsap';
import './newsItem.css';

export class NewsItem extends Component{
  newsCardEl = createRef();
  componentDidMount(){
    let newsCard = this.newsCardEl.current;
    //let timeline = gsap.timeline();

    //let newsCardTransition = gsap.fromTo(newsCard, {
    gsap.fromTo(newsCard, {
      opacity: 0,
      
    }, {
      opacity: 1,
      duration: 3,
    });
    //timeline.add(newsCardTransition);
  }

  render() {
    const { newsItem, onRemoveNewsItem } = this.props;

    return (
      <div className="NewsItem" ref={this.newsCardEl}>
        <h1>{newsItem.title}</h1>
        <div><img style={{
          width: '300px',
          height: '200px',
          objectFit: 'cover',
        }} src={newsItem.photo} alt={newsItem.title}/></div>
        Short Description:
        <div dangerouslySetInnerHTML={{ __html: newsItem.shortDescription }} />
        Text:
        <div dangerouslySetInnerHTML={{ __html: newsItem.text }} />
        <div><b>HashTags: </b>{newsItem.hashTags? newsItem.hashTags.join(', '):newsItem.hashTags }</div>
        <div><b>Author: </b>{newsItem.author}</div>
        <div><button onClick={() => onRemoveNewsItem(newsItem.id)}>Delete</button></div>
      </div>
    );
  }
}

export default NewsItem;

NewsItem.propTypes = {
  newsItem: PropTypes.object,
  onRemoveNewsItem: PropTypes.func.isRequired,
};

NewsItem.defaultProps = {};