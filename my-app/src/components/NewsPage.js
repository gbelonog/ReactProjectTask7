import React, { Component } from 'react';
import { NewsList } from './NewsList';
import { makeNews, makeNewsItem } from "../data";
import { NewsForm } from './NewsForm';

const news = makeNews();

class NewsPage extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      news: news,
      isEditing: false
    };
  }
  removeNewsItem = (id) => {
    this.setState({
      news: this.state.news.filter((e) => e.id !== id),
    });
  };
  
  addNewsItem = (e) => {
    this.setState({
      news: [
        e,
        ...this.state.news,
      ]
    });
  };

  addRandomNewsItem = () => {
    this.addNewsItem(makeNewsItem())
  };

  render() {
    const { news, isEditing } = this.state;
    return <div>
      <button onClick={this.addRandomNewsItem}>Add a random news</button>
      <button onClick={() => this.setState({ isEditing: !isEditing })}>
        {isEditing ? 'Cancel' : 'Add a NewsItem'}
      </button>
        {isEditing && (
            <NewsForm
              onAddNewsItem={this.addNewsItem}
            />
        )}
      <NewsList
          news={news}
          onRemoveNewsItem={this.removeNewsItem}
      />
    </div>;
  }
}

export { NewsPage };