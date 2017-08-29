/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 * FRI OG BEGRENSET
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  addCloseFigureDetailsClickListeners,
  addShowFigureDetailsClickListeners,
} from 'ndla-article-scripts';

import { Button, Figure, FigureCaption, FigureDetails } from 'ndla-ui';

const authors = [
  { type: 'Opphavsmann', name: 'Fotograf Gary Waters' },
  { type: 'Rettighetshaver', name: 'Leverandør NTB scanpix' },
];

class FigureWithLicense extends Component {
  constructor(props) {
    super(props);
    this.update= this.update.bind(this);
    this.state = {
        active: false,
    };
  }

  componentDidMount() {
    addShowFigureDetailsClickListeners();
    addCloseFigureDetailsClickListeners();
  }

  update() {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    const messages = {
      close: 'Lukk',
      rulesForUse: 'Regler for bruk av bildet',
      howToReference: 'Slik skal du referere til dette bildet',
    };
    const caption = this.props.caption ? this.props.caption : `I værmeldingene til NRK på 1980-tallet var symbolet for strålende
                solskinn en hvit sirkel. Ved skiftende vær var sirkelen delt i to
                med en hvit og en svart halvdel.`;
    return (
      <Figure className={this.state.active ? `c-figure` : `c-figure ${this.props.classes}`}>
        <div className="c-figure__img">
          <Button stripped className="u-fullw" onClick={() => this.update()}>
            {this.props.children}
          </Button>
        </div>
        <FigureCaption
          caption={caption}
          reuseLabel="Bruk bildet"
          licenseAbbreviation="by-nc-nd"
          authors={authors}
        />
        <FigureDetails
          licenseAbbreviation="by-nc-nd"
          authors={authors}
          messages={messages}>
          <button
            className="c-button c-button--outline c-figure-license__button"
            type="button">
            Kopier referanse
          </button>
          <button
            className="c-button c-button--outline c-figure-license__button"
            type="button">
            Last ned bilde
          </button>
        </FigureDetails>
      </Figure>
    );
  }
}

FigureWithLicense.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.string,
  caption: PropTypes.string
};

export default FigureWithLicense;
