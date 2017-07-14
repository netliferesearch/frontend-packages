/*
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import Parser from 'html-react-parser';
import {
  initArticleScripts,
  removeEventListenerForResize,
  removeAsideClickListener,
} from 'ndla-article-scripts';

export default class TopicArticleContent extends Component {
  componentDidMount() {
    initArticleScripts();
  }

  componentWillUnmount() {
    removeEventListenerForResize();
    removeAsideClickListener();
  }

  render() {
    const { content, ...rest } = this.props;
    return <div dangerouslySetInnerHTML={{ __html: content }} {...rest} />;
  }
}

TopicArticleContent.propTypes = {
  content: PropTypes.string.isRequired,
};
