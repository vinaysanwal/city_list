import React , {useState} from 'react'
import {Container, Row , Col ,Form ,Button} from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../actions/auth';
import { setAlert } from '../../actions/alert';
import {Link , Redirect } from 'react-router-dom';


const Login = ({isAuthenticated ,  login }) => {

    const [formData , setFormData] = useState({
        email:'',
        password:'',
    });


    const {email , password } = formData;

    const onSubmit = e => {
        e.preventDefault();
        // if(password !== password2){
        //     console.log('password does not match')
        // }
        console.log(formData);
        login({ email , password });
    }
    
    const onchange = e => setFormData({...formData, [e.target.name]: e.target.value})
    
    //Redirect if Logged in 

    if(isAuthenticated){
        return <Redirect to="/dashboard" />;
    }
    
    return (
      <Container fluid style={{background:"#fff"}}>
      <Container>
          <Row>
              <Col xs={6}>
              <img src="https://www.jagranjosh.com/imported/images/E/GK/smart-city-project-image.webp" alt="city_list" width="100%" height="500px" />
              </Col>
              <Col xs={6}>
              <Col xs = {12}>
              <div className="f_box">
              <Form onSubmit={e => onSubmit(e)}>
                  <Form.Group controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={e => onchange(e)}/>
                      <Form.Text className="text-muted">
                          We'll never share your email with anyone else.
                          </Form.Text>
                   </Form.Group>
                   <Form.Group controlId="formBasicPassword">
                       <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={e => onchange(e)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                       Log In
                    </Button>
                </Form>
                </div>
                </Col>
                <Col xs={12}>
                  <div className="f_box1">
                      <p>Don't have an Account ? <Link to="/register" className="btn btn-primary">Sign Up</Link></p>
                  </div>
              </Col>
              </Col>
          </Row>
      </Container>  
      </Container>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated:PropTypes.bool,
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})



export default connect(mapStateToProps, {setAlert , login })(Login)
