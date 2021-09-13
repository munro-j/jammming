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
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
    }

    addTrack(track) {
        let tracks = this.state.playlistTracks;
        if (tracks.find((savedTrack) => savedTrack.id === track.id)) {
            return;
        }
        tracks.push(track);
        this.setState({
            playlistTracks: tracks,
        });
    }

    removeTrack(track) {
        let tracks = this.state.playlistTracks;
        tracks = tracks.filter((pTrack) => pTrack.id !== track.id);
        this.setState({
            playlistTracks: tracks,
        });
    }

    updatePlaylistName(name) {
        this.setState({
            playlistName: name,
        });
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
                            onAdd={this.addTrack}
                        />
                        <Playlist
                            playlistName={this.state.playlistName}
                            playlistTracks={this.state.playlistTracks}
                            onRemove={this.removeTrack}
                            onNameChange={this.updatePlaylistName}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
