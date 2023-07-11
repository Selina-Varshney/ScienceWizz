import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "al-jazeera-english", name: "Al Jazeera English" },
      author: "Al Jazeera",
      title: "Vietnam bans Barbie movie over disputed South China Sea map",
      description:
        "Censors pull film because of scenes showing the ‘nine-dash line’ under which China claims almost all the South China Sea",
      url: "http://www.aljazeera.com/news/2023/7/4/vietnam-bans-barbie-movie-over-disputed-south-china-sea-map",
      urlToImage:
        "https://www.aljazeera.com/wp-content/uploads/2023/07/33M78H4-highres-1688443062.jpg?resize=1920%2C1440",
      publishedAt: "2023-07-04T04:31:25Z",
      content:
        "Vietnam has banned the soon-to-be-released Barbie film because it includes a map depicting Chinas nine-dash line claim over the South China Sea.\r\nThe film, inspired by the plastic doll and starring A… [+1086 chars]",
    },
    {
      source: {
        id: "entertainment-weekly",
        name: "Entertainment Weekly",
      },
      author: "Lester Fabian Brathwaite",
      title:
        "Before Barbie, there was Todd Haynes' infinitely weirder Barbie movie about Karen Carpenter",
      description:
        "Superstar: The Karen Carpenter Story, has been illicitly popping up here and there since Haynes premiered it in 1987.",
      url: "https://ew.com/movies/todd-haynes-barbie-movie-superstar-the-karen-carpenter-story/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=face&w=1500&h=750&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F07%2F03%2Fkaren-carpenter-barbie-movie-070323.jpg",
      publishedAt: "2023-07-04T02:52:45Z",
      content:
        "Greta Gerwig's Barbie movie may be poised to walk way with the summer box office — in an invisible heel, no less — but she's tip-toeing in the footprints of giants.\r\nBack in 1987, when he was an an M… [+3009 chars]",
    },
    {
      source: { id: "polygon", name: "Polygon" },
      author: "Matt Patches",
      title:
        "Tom Cruise running in Mission: Impossible gets a definitive supercut",
      description:
        "From M:I to Ghost Protocol & the new Dead Reckoning, there’s 30 years’ worth of Ethan Hunt running in Mission Impossible movies. Here’s all of it in 10 minutes.",
      url: "https://www.polygon.com/23780290/tom-cruise-mission-impossible-supercut-running",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/l6bo4iJHwEasQI96_XppVnwVxew=/196x0:1724x800/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24763808/ghost_protocol_running.jpg",
      publishedAt: "2023-07-03T13:01:00Z",
      content:
        "Since the original Mission: Impossiblehit theaters 27 years ago, Tom Cruise and a rotating squad of directors have continually redefined what the spy thriller saga is all about. Brian de Palma kicked… [+2147 chars]",
    },
    {
      source: {
        id: "entertainment-weekly",
        name: "Entertainment Weekly",
      },
      author: "Shania Russell",
      title:
        "What's new on Netflix in July 2023: 'They Cloned Tyrone','The Witcher','James Cameron's','Titanic', and more",
      description:
        "Here are all of the TV shows and movies that are hitting the streamer in July.",
      url: "https://ew.com/tv/whats-new-on-netflix-in-july-2023/",
      urlToImage:
        "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1960%2C13%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2023%2F06%2F26%2FComing-to-Netflix-in-July-062623.jpg",
      publishedAt: "2023-07-01T20:00:00Z",
      content:
        "After June's TUDUM preview event, Netflix is moving forward with a jam-packed July. Just in time for the summer heat, the streamer is giving subscribers a couple dozen reasons to relax indoors.\r\nThou… [+4344 chars]",
    },
    {
      source: { id: "polygon", name: "Polygon" },
      author: "Austen Goslin",
      title:
        "How many credits scenes does Indiana Jones and the Dial of Destiny have",
      description:
        "Harrison Ford’s (likely) last outing as Indiana Jones is here, but is the end of the movie actually the end? Are there post-credits scenes in Dial of Destiny?",
      url: "https://www.polygon.com/23779908/indiana-jones-dial-destiny-post-credits-scene",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/2jeZ1tEVpCbWDYbO4JAmLeLTBqk=/450x0:3519x1607/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24761656/IJ_DOD_dtlr2_uhd_r709f_stills_230405.088296.jpg",
      publishedAt: "2023-06-30T16:09:11Z",
      content:
        "Indiana Jones is back for another adventure, and it seems like it will be Harrison Fords final time as the swashbuckling archeologist. But, as with every movie today, there are plenty of questions ab… [+1715 chars]",
    },
    {
      source: { id: "time", name: "Time" },
      author: "Eliana Dockterman",
      title: "Why It Took 64 Years to Make a Barbie Movie",
      description:
        "It's officially the summer of Barbie: Here's a long look at the history of the Barbie movie, as told by the director, stars, and Mattel execs.",
      url: "http://time.com/6289787/barbie-movie-history-mattel/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2023/06/time-barbie-movie-making-of.jpg?quality=85&w=1200&h=628&crop=1",
      publishedAt: "2023-06-27T11:05:37Z",
      content:
        "Barbie is an icon, perhaps the best known toy in the world. As Margot Robbie points out in an interview with me for a TIME cover story, the word “Barbie” has the sort of enviable global recognition o… [+11785 chars]",
    },
    {
      source: { id: "time", name: "Time" },
      author: "Eliana Dockterman",
      title: "How Barbie Came to Life",
      description:
        "Interviews with Mattel execs, Greta Gerwig and Margot Robbie about how they tried to find art in commerce to create summer's biggest movie.",
      url: "http://time.com/6289864/barbie-time-cover-story/",
      urlToImage:
        "https://api.time.com/wp-content/uploads/2023/06/time-barbie-movie-margot-robbie-issa-kate-alexandra-hari-group.jpg?quality=85&w=1200&h=628&crop=1",
      publishedAt: "2023-06-27T11:00:51Z",
      content:
        "There’s plenty to consider about Barbie, but let’s start with her feet. Perfectly arched, but not quite demi-pointe—the ideal position to fit into any pump. They’re instantly recognizable to anyone w… [+21850 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "",
      title: "See how they turned Margot Robbie into a Barbie doll | CNN",
      description:
        "Margot Robbie stars as Barbie in a movie slated for summer 2023. Watch how they turned the Hollywood actress into a Barbie doll.",
      url: "https://www.cnn.com/videos/style/2023/06/01/mattel-barbie-doll-margot-robbie-cprog-orig-gr-md.cnn",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230601061056-barbie-margot-robbie.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-01T11:51:37Z",
      content: null,
    },
    {
      source: { id: "ign", name: "IGN" },
      author: "Collier Jennings",
      title: "Best Action Movies on Netflix Right Now (September 2022) - IGN",
      description:
        "These are the best action movies on Netflix right now -- blockbusters, fight films, animated adventures and shootouts galore.",
      url: "https://www.ign.com/articles/best-action-movies-on-netflix-right-now",
      urlToImage:
        "https://assets-prd.ignimgs.com/2022/07/28/rrr-1659047262112.jpg?width=1280",
      publishedAt: "2022-09-01T18:03:14Z",
      content:
        "There is nothing like a good action movie on Netflix. The perfectly choreographed fight scenes that let you feel every punch and kick on screen; the shootouts that see bullets and bodies hitting the … [+11394 chars]",
    },
  ];

  constructor() {
    super();
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    console.log("cdm ran");
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=51720d1e431c461285e22355344123f9&pageSize=18";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=51720d1e431c461285e22355344123f9&page=${
      this.state.page - 1
    }&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page - 1 });
  };

  handleNextClick = async () => {
    console.log("next clicked");
    // if (this.state.page + 1 < Math.ceil(this.state.totalResults / 18)) {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=51720d1e431c461285e22355344123f9&page=${
      this.state.page + 1
    }&pageSize=18`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    console.log("render ran");
    return (
      <div className="container my-3 ">
        <h2 className="text-center">SCIENCEWIZZ - Top headlines</h2>

        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-3 mx-2 my-2" key={element.url}>
                <NewsItem
                  title={
                    element.title
                      ? element.title.length >= 40
                        ? element.title.slice(0, 40)
                        : element.title
                      : ""
                  }
                  description={
                    element.description
                      ? element.description.length >= 80
                        ? element.description.slice(0, 80)
                        : element.description
                      : "No description available for this news. Kindly stay tuned as we bring in more updates."
                  }
                  //   element.description.length >= 80
                  //     ? element.description.slice(0, 80)
                  //     : element.description
                  // }
                  //   title={element.title?.slice(0, 45)}
                  //   description={element.description?.slice(0, 160)}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 18)
            }
            type="button"
            class="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
