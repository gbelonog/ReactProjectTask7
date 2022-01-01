import React, { Component } from 'react';
import PropTypes from 'prop-types';
import faker from 'faker';
// import { getBase64 } from "./utils";
// import { HASHTAGS, AUTHORS } from "../data";
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

  state = {
  //   // title: '',
  //   shortDescription: '',
    text: '',
  //   photo: '',
  //   hashTags: [],
  //   author: '',
    titleError: false,
     textError: false,
  //   photoError: false,
  //   hashTagsError: false,
  //   authorError: false,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const id = faker.datatype.uuid();
    // const news = {
    //   id,
    //   ...this.state
    // };
    let title = this.titleInput.value;
    let shortDescription = this.shortDescriptionInput.value;

    if(!title){this.setState({titleError: true})};
    let text = this.state.text;
    const news = {
      id,
      title, 
      shortDescription,
      text
    };
    console.log("news", news);
    
    
     if(!this.state.text){this.setState({textError: true})};
    // if(!this.state.photo){this.setState({photoError: true})};
    // if(!this.state.author){this.setState({authorError: true})};
    // if(this.state.hashTags.length === 0){this.setState({hashTagsError: true})};
   // if(this.state.titleError )
    //   && this.state.textError
    //   && this.state.photoError
    //   && this.state.authorError
    //   && this.state.hashTagsError
    //   ){this.props.onAddNewsItem(news);}
    
    if(title){this.props.onAddNewsItem({news})};
    //if(this.state.titleError)this.props.onAddNewsItem({news});
  };

  handleChangeText = (e) => {
    const input = e.currentTarget;
    console.log(e.currentTarget);
    const { value, name } = input;
    this.setState({ [name]: value });
    if(name !== 'shortDescription'){
      this.setState({ [name + 'Error']: false });
    }
  };

  // handleChangePhoto = (e) => {
  //   const file = e.currentTarget.files[0];
  //   getBase64(file, (base64) => {
  //     this.setState({
  //       photo: base64,
  //       photoError: false
  //     });
  //   })
  // };

  // handleChangeAuthor = (e) => {
  //   const { value } = e.currentTarget;
  //   this.setState({
  //     author: value,
  //     authorError: false
  //   });
  // };

  // handleChangeHashTag = (e) => {
  //   const { value } = e.currentTarget;
  //   let newHashTag;

  //   if (this.state.hashTags.includes(value)) {
  //     newHashTag = this.state.hashTags.filter(el => el !== value);
  //   } else {
  //     newHashTag = [...this.state.hashTags, value];
  //   }

  //   this.setState({
  //     hashTags: newHashTag,
  //     hashTagsError: false
  //   });
  // };

  render() {
    const {
      // title,
      // shortDescription,
      text,
      // photo,
      // hashTags,
      // author,
      titleError,
      textError,
      // photoError,
      // hashTagsError,
      // authorError,
    } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            {/* <div>Title:<input value={title} onChange={this.handleChangeText} type="text" name="title" /></div>
            {titleError && (<span style={{ color: 'red' }}>{ERRORS.title}</span>)} */}
            <div>Title:<input 
              ref={(node) => this.titleInput = node}
              // value={title} 
              // onChange={this.handleChangeText} 
              type="text" 
              name="title"></input></div>
              {titleError && (<span style={{ color: 'red' }}>{ERRORS.title}</span>)}
            <div>Short Description:<textarea 
              //value={shortDescription} 
              //onChange={this.handleChangeText} 
              ref={(node) => this.shortDescriptionInput = node}
              name="shortDescription"/></div>
            <div>Text:<textarea value={text} onChange={this.handleChangeText} name="text"/></div>
            {textError && (<span style={{ color: 'red' }}>{ERRORS['text']}</span>)}
            {/* <div>Photo:
                {photo.length > 0 && (
                <img style={{
                    width: '300px',
                    height: '200px',
                    objectFit: 'contain',
                }} src={photo} alt=""/>
                )}
                <input type="file" accept=".jpeg,.png" onChange={this.handleChangePhoto} />
            </div>
            {photoError && (<span style={{ color: 'red' }}>{ERRORS['photo']}</span>)}
            <div>Author:
                {AUTHORS.map((e) => (
                    <label key={e}>
                    <input
                        checked={author === e}
                        type="radio"
                        value={e}
                        onChange={this.handleChangeAuthor}
                    /><span>{e}</span>
                    </label>
                ))}
            </div>
            {authorError && (<span style={{ color: 'red' }}>{ERRORS['author']}</span>)}
            <div>
                <span>HashTags:</span>
                {HASHTAGS.map((e) => (
                    <label key={e.value}>
                    <input
                        checked={hashTags.indexOf(e.value) !== -1}
                        type="checkbox"
                        value={e.value}
                        onChange={this.handleChangeHashTag}
                    /><span>{e.label}</span>
                    </label>
                ))}
            </div>
            {hashTagsError && (<span style={{ color: 'red' }}>{ERRORS['hashTags']}</span>)}
           */}
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