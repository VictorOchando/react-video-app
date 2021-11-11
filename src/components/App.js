import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        onSearchTermSubmit("videos");
    }, []);

    const onSearchTermSubmit = async (searchTerm) => {
        const response = await youtube.get("/search", {
            params: {
                q: searchTerm,
            },
        });
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };

    return (
        <div className="ui container">
            <SearchBar searchTermSubmit={onSearchTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList
                            videos={videos}
                            onVideoSelect={setSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

//----------------------------------------------------------------------------

// class App extends React.Component {
//     state = { videos: [], selectedVideo: null };

//     componentDidMount() {
//         this.onSearchTermSubmit("videos");
//     }

//     onSearchTermSubmit = async (searchTerm) => {
//         const response = await youtube.get("/search", {
//             params: {
//                 q: searchTerm,
//             },
//         });
//         this.setState({
//             videos: response.data.items,
//             selectedVideo: response.data.items[0],
//         });
//     };

//     onVideoSelect = (video) => {
//         this.setState({ selectedVideo: video });
//     };

//     render() {
//         return (
//             <div className="ui container">
//                 <SearchBar searchTermSubmit={this.onSearchTermSubmit} />
//                 <div className="ui grid">
//                     <div className="ui row">
//                         <div className="eleven wide column">
//                             <VideoDetail video={this.state.selectedVideo} />
//                         </div>
//                         <div className="five wide column">
//                             <VideoList
//                                 videos={this.state.videos}
//                                 onVideoSelect={this.onVideoSelect}
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// ------------------------------------------------------------------------

export default App;
