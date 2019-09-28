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
                <center><header>Renzy Word Count</header></center>
                <br></br>
                <center>
                <form>
                <textarea onChange={(event) => this.handleKeypress(event)} placeholder="Enter sentence">{this.state.value}</textarea><br/>
                <textarea onChange={(e) => this.secondWordHandler(e)} placeholder="Enter specific word">{this.state.sWord}</textarea>
                <div className="a">Count Words: {this.state.List.length}</div>
                <div className="a">Count: {this.state.occurence}</div>
                <div className="a">Input: {this.state.value}</div>
                <button onClick={(e) => this.countWordHandler(e)}>Click</button>
                </form>
                </center>
            </div>
        );
    }
}

export default WordCounter;