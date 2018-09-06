/**
 * Copyright (c) 2015-present, Pavel Aksonov
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, ViewPropTypes } from 'react-native';

export default class extends React.Component {

  // @todo - should all props be documented/specified here?

  static propTypes = {
    tabBarStyle: (View.propTypes || ViewPropTypes).style,
    tabBarSelectedItemStyle: (View.propTypes || ViewPropTypes).style,
    tabBarIconContainerStyle: (View.propTypes || ViewPropTypes).style,
    tabBarShadowStyle: (View.propTypes || ViewPropTypes).style,
    tabSceneStyle: (View.propTypes || ViewPropTypes).style,
    tabStyle: (View.propTypes || ViewPropTypes).style,
    tabTitleStyle: Text.propTypes.style,
    tabSelectedTitleStyle: Text.propTypes.style,
    tabTitle: PropTypes.string,
  };

  render() {
    return null;
  }
}
