import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _lodash from 'lodash';

const API_KEY = 'AIzaSyC2A3x9kdiMF3xJmBu7eQrRHVaSK9pbFfk';

class App extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {videos:[], selectedVideo:null};

    this.videoSearch('surfboards');
  }

  videoSearch(searchTerm){
    YTSearch({key:API_KEY, term:searchTerm}, (d)=>{
    this.setState({
      videos:d,
      selectedVideo:d[0]
    })});
  }

  render(){
    const videoSearch = _lodash.debounce((term)=>{return this.videoSearch(term)}, 300);
    return (
      <div className='subContainer'>
        <div>
          <SearchBar onSearchTermChange={videoSearch} className='search-bar' />
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <VideoList
          onVideoSelect = {(selectedVideo) =>{return this.setState({selectedVideo:selectedVideo})}}
          className='video-list' videos = {this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
