import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchNavi from './components/search_navi';
import VideoReturn from './components/video_list';
import VideoProperties from './components/video_props';
import _ from 'lodash';

const API_KEY = 'AIzaSyBxH9N0nscrg1MlBuWu944g7LudI4nzx2o';



class App extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            videoSearch: [],
            selectVid: null
        };

        this.searchNewVideo("nier automata ost");
    }

    searchNewVideo (word){

        YTSearch({key: API_KEY, term: word}, (data) => {
            this.setState({
                videoSearch: data,
                selectVid: data[0]
            });
        });
    }


    render(){

        const slowVidSearch = _.debounce((word) => {this.searchNewVideo(word)}, 250);

        return (
            <div>
                <div className =  "search-bar">Enter search term below  :D</div>
                <SearchNavi onSearchWord =  {slowVidSearch} />
                <VideoProperties vid = {this.state.selectVid} />
                <VideoReturn onVidClick = {selectVid => this.setState({selectVid})} videos = {this.state.videoSearch} />

            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
