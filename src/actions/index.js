import axios from "axios";

export const FETCHING = "FETCHING";
export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";

export const fetchCharacters = () => {
  return dispatch => {
    dispatch({ type: "FETCHING" });
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        dispatch({ type: "SUCCESS", payload: { characters: response } });
      })
      .catch(err => {
        dispatch({
          type: "FAILURE",
          payload: { error: "Characters not found" }
        });
      });
  };
};
