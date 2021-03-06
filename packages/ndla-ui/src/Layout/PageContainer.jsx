/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export const PageContainer = ({ children }) => (
  <div className="o-container">{children}</div>
);

PageContainer.propTypes = {
  children: PropTypes.node,
};

export default PageContainer;
