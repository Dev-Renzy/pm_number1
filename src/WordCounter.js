import React, {Component} from 'react';

class WordCounter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            sWord: '',
            count: 0,
            List: [], 
            occurence: 0
        }
        this.handleKeypress = this.handleKeypress.bind(this);
    }
    secondWordHandler(e){
        this.setState({sWord: (e.target.value)})
    }

    handleKeypress(event) {
        console.log('*****', event.target.value);
        this.setState({ value: (event.target.value)});
    }
    countWordHandler(e){
        e.preventDefault();
        let counter = 0;
        let word = this.state.value.split(" ");
        let wordGiven = this.state.List;
        word.forEach(i => {
            this.state.List.push(i)
            // this.setState({List: (this.state.List.push(i))})
            this.setState({count: (this.state.count + 1)})
        })
        wordGiven.forEach(element => {
            console.log(element)
            if(element === this.state.sWord){
                counter += 1;
            }
            this.setState({occurence: (this.state.occurence + counter)})  
        })
    }
    lengthListHandler(e){
        e.preventDefault();
        this.setState({List: (this.state.List.length)})
    }

    render() {
        return (
            <div>
                <textarea onChange={(event) => this.handleKeypress(event)}>{this.state.value}</textarea><br/>
                <textarea onChange={(e) => this.secondWordHandler(e)}>{this.state.sWord}</textarea>
                <div>Count Words: {this.state.List.length}</div>
                <div>Count: {this.state.occurence}</div>
                <div>Input: {this.state.value}</div>
                <button onClick={(e) => this.countWordHandler(e)}>Click</button>
            </div>
        );
    }
}

export default WordCounter;