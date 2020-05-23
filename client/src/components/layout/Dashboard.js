import React , { Fragment , useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCity } from '../../actions/city'
import City from './City';
import {Container, Row , Col} from 'react-bootstrap';

const Dashboard = ({ getCity ,  isAuthenticated , city:{ cities , loading} }) => {
  useEffect(() => {
    getCity();
    //eslint-disable-next-line
}, []);

  return (
    <Fragment>
      {loading ? <p style={{textAlign:"center"}}>City List Loading</p> : <Fragment>
        <Container>
              <Row>
                 
          {cities.length > 0 ? (
            cities.map(city =>(
              <Col xs={3}>
              <div style={{backgroundColor:"#eaeaea", border:"1px solid #000", padding:"5px", margin:"10px"}}>
              <City key={city.id} city={city} />
              </div>
               </Col>
            ))
          ) : <h3>No City Found ...</h3>}
            </Row></Container>
      </Fragment>}
    </Fragment>
  );
};

Dashboard.propTypes = {
  isAuthenticated: PropTypes.bool,
  getCity:PropTypes.func.isRequired,
  city:PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  city: state.city
});

export default connect(mapStateToProps , { getCity })(Dashboard);