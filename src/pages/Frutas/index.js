import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Mensagem,
  List,
  Cesta,
  Fruits,
  Detail,
  DetailText,
} from './styles';
import api from '../../services/api';

export default class Frutas extends Component {
  static navigationOptions = {
    title: 'POP Fruit',
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }).isRequired,
  };

  state = {
    frutas: [],
    mensagem: '',
  };

  async componentDidMount() {
    const response = await api.get('/');

    this.setState({
      mensagem: response.data.message,
      frutas: response.data.basket,
    });
  }

  handleNavigate = frutas => {
    const { navigation } = this.props;

    navigation.navigate('Detalhes', { frutas });
  };

  render() {
    const { mensagem, frutas } = this.state;
    return (
      <Container>
        <Mensagem>{mensagem}</Mensagem>
        <List
          data={frutas}
          keyExtractor={fruta => fruta.type}
          renderItem={({ item }) => (
            <Cesta>
              <Fruits>{`${item.type}  -  Qt: ${item.quantity}x`}</Fruits>
              <Detail onPress={() => this.handleNavigate(item)}>
                <DetailText>Detalhes</DetailText>
              </Detail>
            </Cesta>
          )}
        />
      </Container>
    );
  }
}

Frutas.navigationOptions = {
  title: 'Cestinha de frutas',
};
