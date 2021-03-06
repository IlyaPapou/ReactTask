import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import WeatherInfo from '../../components/WeatherInfo/WeatherInfo.jsx';
import Button from '../../components/Button/Button.jsx';

class WeatherInfoContainer extends Component {
  render() {
    const { selectedCity } = this.props;
    return (
      <>
        <WeatherInfo
        cityName={selectedCity.name}
        country={selectedCity.country}
        description={selectedCity.description}
        temperature={selectedCity.temperature} />
        <Link to="/"><Button text="Back" /></Link>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedCity: state.setSelectedCity,
});

WeatherInfoContainer.propTypes = {
  selectedCity: PropTypes.shape({
    country: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
  }),
};

export default connect(mapStateToProps)(WeatherInfoContainer);
