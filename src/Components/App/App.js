import React from "react";
import "./App.css";
// import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    name: "Friends",
                    artist: "Mac Miller",
                    album: "Faces",
                    id: 1,
                },
                {
                    name: "Falling Out The Sky",
                    artist: "Armand Hammer",
                    album: "Haram",
                    id: 2,
                },
                {
                    name: "FEEL.",
                    artist: "Kendrick Lamar",
                    album: "DAMN.",
                    id: 3,
                },
                {
                    name: "Two Worlds Apart",
                    artist: "Little Simz",
                    album: "Sometimes I Might Be Introvert",
                    id: 4,
                },
                {
                    name: "4 Your Eyez Only",
                    artist: "J. Cole",
                    album: "4 Your Eyez Only",
                    id: 5,
                },
            ],
            playlistName: "Jamie's Anthems",
            playlistTracks: [
                {
                    name: "Friends",
                    artist: "Mac Miller",
                    album: "Faces",
                    id: 1,
                },
                {
                    name: "Falling Out The Sky",
                    artist: "Armand Hammer",
                    album: "Haram",
                    id: 2,
                },
                {
                    name: "FEEL.",
                    artist: "Kendrick Lamar",
                    album: "DAMN.",
                    id: 3,
                },
                {
                    name: "Two Worlds Apart",
                    artist: "Little Simz",
                    album: "Sometimes I Might Be Introvert",
                    id: 4,
                },
                {
                    name: "4 Your Eyez Only",
                    artist: "J. Cole",
                    album: "4 Your Eyez Only",
                    id: 5,
                },
            ],
        };
    }

    render() {
        return (
            <div>
                <h1>
                    Ja<span className="highlight">mmm</span>ing
                </h1>
                <div className="App">
                    {/* Add a SearchBar component */}
                    <div className="App-playlist">
                        <SearchResults
                            searchResults={this.state.searchResults}
                        />
                        <Playlist
                            playlistName={this.state.playlistName}
                            playlistTracks={this.state.playlistTracks}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
