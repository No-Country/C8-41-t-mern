import { AnyAction, createSlice, ThunkAction } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from ".."
import { endpointUrl } from "../../config"

export const userSlice = createSlice({
  name: 'user',
  initialState: null,
  reducers: {
    setUser: (state, action) => action.payload
  }
})


export const { setUser } = userSlice.actions
export const getUser = (): ThunkAction<void, RootState, unknown, AnyAction> => async dispatch => {
  const token = localStorage.getItem('token')
  if(token){
    return axios.get(endpointUrl+'users/me', {
      headers: {
        'Authorization': 'JWT '+token
      }
    }).then(res=> dispatch(setUser(res.data)))
    .catch(err=> console.log(err))
  }
}
export default userSlice.reducer