import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="mx-5">
        {/* This is a news item */}
        <div
          className="card"
          style={{
            width: "18rem",
            backgroundColor: "#f1ce66",
            border: "2px solid black",
          }}
        >
          <img
            src={
              !imageUrl
                ? "https://getwallpapers.com/wallpaper/full/6/9/e/1488872-download-science-fiction-wallpaper-sci-fi-2960x1850-windows.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="image not available"
            style={{
              height: "200px",
              padding: "5px ",
            }}
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
