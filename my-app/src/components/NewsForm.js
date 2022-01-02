import React, { Component } from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
import { HASHTAGS, AUTHORS } from "../data";

const ERRORS = {
  title: "Title cannot be empty.",
  text: "Text cannot be empty.",
  photo: "Photo is not selected.",
  hashTags: "Hash tags are not selected.",
  author: "Author is not selected.",
}

export class NewsForm extends Component {
  
  titleInput = null;
  shortDescriptionInput = null;
  textInput = null;
  hashTagsInput = [];

  state = {
    titleError: false,
    textError: false,
    hashTagsError: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();
    let title = this.titleInput.value;
    let shortDescription = this.shortDescriptionInput.value;
    let text = this.textInput.value;
    let photo = faker.image.imageUrl()+faker.random.number({ min: 0, max: 10 });
    let author = AUTHORS[faker.random.number({ min: 0, max: AUTHORS.length - 1 })];
    let rowHashTags = this.hashTagsInput.map((e, i)=>{return e.checked&&HASHTAGS[i].value});
    let hashTags=[];
    
    for(let i=0; i<rowHashTags.length; i++){
      if(rowHashTags[i]){hashTags.push(rowHashTags[i])}
    }

    if(!title){this.setState({titleError: true})};
    if(!text){this.setState({textError: true})};
    if(hashTags.length === 0){this.setState({hashTagsError: true})};

    const news = {
      id,
      title, 
      shortDescription,
      text, 
      photo,
      author, 
      hashTags
    };
    
    if(title && text && hashTags ){this.props.onAddNewsItem({news})};
  };

  render() {
    const {
      titleError,
      textError,
      hashTagsError,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>Title:
              <input 
                ref={(node) => this.titleInput = node}
                type="text" 
                name="title">
              </input>
            </div>
              {titleError && (<span style={{ color: 'red' }}>{ERRORS.title}</span>)}

            <div>Short Description:<textarea 
              ref={(node) => this.shortDescriptionInput = node}
              name="shortDescription"/>
            </div>

            <div>Text:<textarea 
              ref={(node) => this.textInput = node}
              name="text"/>
            </div>
            {textError && (<span style={{ color: 'red' }}>{ERRORS['text']}</span>)}
            
            <div>
                <span>HashTags:</span>
                {HASHTAGS.map((e, i) => (
                    <label key={e.value}>
                    <input
                        type="checkbox"
                        ref={(node) => this.hashTagsInput[i] = node}
                    /><span>{e.label}</span>
                    </label>
                ))}
            </div>
            {hashTagsError && (<span style={{ color: 'red' }}>{ERRORS['hashTags']}</span>)}
          
            <button type="submit">Create news</button>
        </form>
      </div>
    );
  }
}

export default NewsForm;

NewsForm.propTypes = {
  onAddNewsItem: PropTypes.func.isRequired,
};

NewsForm.defaultProps = {};