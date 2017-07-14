/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import { getLicenseByAbbreviation } from 'ndla-licenses';

import { Copy, Download } from '../../src/icons';

import { LicenseByline } from '../../src';

const LicenseExampleImage = () =>
  <div className="u-expanded">
    <div className="c-modal__license">
      <LicenseByline license={getLicenseByAbbreviation('by-nc-nd')}>
        <span className="article_meta">
          Ola Nordmann, Kari Nordmann. Publisert: 10.10.2010.
        </span>
      </LicenseByline>
    </div>
    <div className="c-modal__details">
      <div>
        <p>For å bruke dette bildet må du legge ved denne kildehenvisningen:</p>
        <div className="c-bodybox c-bodybox--attribute">
          <span>Foto: Ola Nordmann, Rettighetshaver: NDLA.</span>
        </div>
      </div>
    </div>
    <div className="c-modal__ctablock u-text-center">
      <button className="c-modal__button c-button--transparent" type="button">
        <Copy className="c-modal__button-icon" /> Kopier bilde
      </button>
      <button className="c-modal__button" type="button">
        <Download className="c-modal__button-icon" /> Last ned bilde
      </button>
    </div>
  </div>;

LicenseExampleImage.propTypes = {};

export default LicenseExampleImage;
