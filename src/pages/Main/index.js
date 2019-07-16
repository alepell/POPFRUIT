import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, ButtonBasket, Textinho } from './styles';

export default class Main extends Component {
  static navigationOptions = {
    title: 'POP Fruit',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  handleNavigate = () => {
    const { navigation } = this.props;

    navigation.navigate('Frutas');
  };

  render() {
    return (
      <Container>
        <ButtonBasket onPress={this.handleNavigate}>
          <Icon name="basket" size={100} color="#fff" />
        </ButtonBasket>
        <Textinho>Clique na cestinha! :D</Textinho>
      </Container>
    );
  }
}
