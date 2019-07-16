/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import api from '../../services/api';
import { Container, Header, Avatar, Success } from './styles';

export default class Detalhes extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('frutas').type,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    detalhes: [],
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const frutas = navigation.getParam('frutas');

    const response = await api.get(`/fruits/${frutas.type}`);
    console.log(response);
    this.setState({ detalhes: response.data });
  }

  render() {
    const { navigation } = this.props;
    const { detalhes } = this.state;
    const frutas = navigation.getParam('frutas');
    return (
      <Container>
        <Header>
          <Avatar
            source={{
              uri: `https://api-pesada.herokuapp.com/static/${frutas.type}.png`,
            }}
          />
        </Header>
        <Success>{detalhes.status}</Success>
      </Container>
    );
  }
}
