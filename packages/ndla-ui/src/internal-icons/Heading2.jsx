/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

const Heading2 = ({ className }) =>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="15"
    viewBox="0 0 22 15"
    className={className}>
    <path
      fillRule="evenodd"
      d="M.2 15h.704V7.564h8.14V15h.704V.48h-.704v6.468H.904V.48H.2V15zm12.672 0h8.448v-.616h-5.06c-.792 0-1.584.044-2.376.088 4.136-4.378 6.732-7.084 6.732-9.944 0-2.332-1.408-3.872-3.872-3.872-1.672 0-2.904.924-3.916 2.068l.484.44c.88-1.1 2.068-1.892 3.388-1.892 2.244 0 3.212 1.452 3.212 3.256 0 2.508-2.288 5.148-7.04 10.032V15z"
    />
  </svg>;

Heading2.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Heading2;