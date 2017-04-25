import React from 'react';

class SearchNavi extends React.Component {
    
    constructor(props){
        
        super(props);
        this.state = {word: ''};
    }
    
    
    
    render() {
        return(
            <div className = "search-bar">
                <input 
                    value = {this.state.word}
                    onChange = {e => this.onSearchChange(e.target.value)} />

            </div>
        
        );
    }
    
    onSearchChange(word){
        this.setState({word});
        this.props.onSearchWord(word);
    }
}

export default SearchNavi;