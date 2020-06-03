import React, { Component } from "react";

const NewPost = props => {
    var styles = {
        width:'30%',
        height: '30%',
        backgroundColor:'black',
        fontWeight:'bold'
    };
  return (
  <div className="Post">
  <h3>{props.article.title}</h3>
  <div><i>{props.article.author}</i></div>
  <span>{props.article.description}</span>
  <div> <a href={props.article.url}>Read more</a></div>
  <div>{props.article.content}</div>
  <img src={props.article.urlToImage} style={styles}></img>
  <br></br>
  </div>
 
  
  );
};

export default class HealthNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: []
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=sport&apiKey=d3164b0ab41b45a4a9a4a5b97049b95c"
    )
      .then(res => res.json())
      .then(data => {
        this.setState({news: data.articles});
        console.log(this.state.news);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="NewsFeed">
        {this.state.news.map(a => {
          return <NewPost article={a} />;
        })}
      </div>
    );
  }
}
