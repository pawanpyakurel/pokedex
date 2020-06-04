import React, { Component } from 'react';
import { connect } from 'react-redux';

//styles
import { SearchModalWrapper, ModalHeader } from "./SearchModal.styles";
import{colors} from "../../config/theme";
import { FaTimes } from "react-icons/fa";
import 'rodal/lib/rodal.css';

//components
import { SearchBar } from "../SearchBar";
import Rodal from "rodal";
import LazyLoad from "react-lazyload";
import { Card } from "../Card";

class SearchModal extends Component {
    state = {
        foundItems: [],
        searchText: ""
      };
      handleChange = searchedChar => {
        var count = 0;
        console.log(this.props, "props in search modal")


        const results = this.props.payload.filter(pokemon => {
          return (
            pokemon.name.toLowerCase().indexOf(searchedChar.toLowerCase()) > -1 &&
            count++ < 30   //filter only up to 30 number so whay to show all result when screen only show less then 25 results
          );
        });
        this.setState({
          foundItems: results,
          searchText: searchedChar.toLowerCase()
        });
      };
    
    render() {
       
        const { visible} = this.props;
        console.log(visible, "open searchbar state")

        return (
            <>
                <Rodal
                    visible={visible}
                    onClose={this.props.hideModal}
                    showMask={false}
                    enterAnimation="slideDown"
                    leaveAnimation="slideDown"
                    showCloseButton={false}
                    width="100%"
                    height="100%"
                    slideUp
                    customStyles={{
                        background: colors.backgroundDark,
                        opacity: 0.9,
                        zIndex:3,
                        top: 0,
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                    }}
                >
                    <ModalHeader>
                        <SearchBar handleChange={this.handleChange}/>
                        <div className ="ModalHeaderWrapper">
                            <FaTimes size={40} onClick={this.props.hideModal} />
                        </div>
                    </ModalHeader>
                    <SearchModalWrapper>
                    {this.state.foundItems && this.state.foundItems.length > 0 &&
                        this.state.foundItems.map(pokemon => (
                            <LazyLoad height={200} once offset={0}>
                            <Card  
                                pokemon_name = {pokemon.name}  
                                imageURL = {pokemon.imageUrl}
                                searchText={this.state.searchText}
                            />
                        </LazyLoad>
                        ))}
                    </SearchModalWrapper>
                </Rodal>
            </>
        );
    }
}

const mapStateToProps = state => ({
    payload: state.pokemons.pokemons
});

export default connect(
    mapStateToProps,
)(SearchModal);