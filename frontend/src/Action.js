import axios from "axios";
import { GETUSER } from "./Actiontype";
export const Getusers = () => async (dispatch) => {
  try {
    await axios.get("/user/get").then(
      (res) => dispatch({ type: GETUSER, payload: res.data })
      // dispatch({type:GETUSER,payload:res.data.all_users}):to get the table without the message
    );
  } catch (error) {
    console.log("error", error);
  }
};
export const Createusers = (data) => async (dispatch) => {
  try {
    await axios.post("/user/create", data).then(
      (res) => dispatch(Getusers())
      // dispatch({type:GETUSER,payload:res.data.all_users}):to get the table without the message
    );
  } catch (error) {
    console.log("error", error);
  }
};
export const Deleteuser = (id) => async (dispatch) => {
  try {
    await fetch("/user/delete/" + id, {
      method: 'DELETE',
      headers: { "content-type": "application/json" },
    }).then((res) => dispatch(Getusers()));
  } catch (error) {
    console.log(error)
  }
  
};
export const Editusers=(id,data)=>async(dispatch)=>{
    try {
        await axios.put('/user/update/'+id,data).then((res)=>dispatch(Getusers()))
    } catch (error) {
        console.log(error)
    }
}