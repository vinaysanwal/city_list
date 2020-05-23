import axios from 'axios';

import{
  GET_CITY , CITY_ERR
} from './types';


//Fetch City List 
export const getCity = () => async dispatch => {

   try {
      const res = await axios.get('http://localhost:5000/api/city_list');
      dispatch({
        type: GET_CITY,
        payload: res.data
      });     
   } catch (err) {
      dispatch({
        type: CITY_ERR
      })
   }

}






