import React, {Component} from 'react';
import {View} from 'react-native';
import Menu, {MenuItem} from 'react-native-material-menu';
import Icon from '../CustomIcon/CustomIcon';
import {secondColor} from '../../styles';

export default class CustomMenuIcon extends Component {
  _menu = null;
  setMenuRef = (ref) => {
    this._menu = ref;
  };
  showMenu = () => {
    this._menu.show();
  };
  hideMenu = () => {
    this._menu.hide();
  };
  optionClick = (onPress) => () => {
    this._menu.hide();
    onPress();
  };

  render() {
    return (
      <View style={this.props.menuContainerStyle}>
        <Menu
          ref={this.setMenuRef}
          button={
            <Icon
              name={this.props.iconName}
              color={secondColor}
              onPress={this.showMenu}
            />
          }>
          {this.props.options.map((option, index) => {
            return (
              <MenuItem key={index} onPress={this.optionClick(option.onPress)}>
                {option.title}
              </MenuItem>
            );
          })}
        </Menu>
      </View>
    );
  }
}
