import React, { Component } from 'react';

import { Details } from "../components/Details"

import{ DetailWrapper } from './PokemonDetails.styles';

class PokemonDetail extends Component {
    render() {
        console.log(this.props.match && this.props.match.params && this.props.match.params.id, "props data in the detail page")
        return (
            <DetailWrapper>
                <Details _id= {this.props.match && this.props.match.params && this.props.match.params.id} />
            </DetailWrapper>
        );
    }
}

export default PokemonDetail;