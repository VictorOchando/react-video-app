import React, { useState } from "react";

const SearchBar = ({ searchTermSubmit }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const onInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        searchTermSubmit(searchTerm);
        //callback from parent component
    };

    return (
        <div className="search-bar ui segment">
            <form onSubmit={onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search </label>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={onInputChange}
                    />
                </div>
            </form>
        </div>
    );
};

// class SearchBar extends React.Component {
//     state = { searchTerm: "" };

// onInputChange = (event) => {
//     this.setState({ searchTerm: event.target.value });
// };

// onFormSubmit = (event) => {
//     event.preventDefault();
//     this.props.searchTermSubmit(this.state.searchTerm);
//     //callback from parent component
// };

//     render() {
// return (
//     <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//             <div className="field">
//                 <label>Video Search </label>
//                 <input
//                     type="text"
//                     value={this.state.searchTerm}
//                     onChange={this.onInputChange}
//                 />
//             </div>
//         </form>
//     </div>
// );
//     }
// }

export default SearchBar;
