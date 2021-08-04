import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux"

const initialState = []

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action) {
      action.payload.forEach(value => {
        state.push(value)
      })
    },
    addUser(state, action) {
      state.push({
        ...action.payload
      })
    },
    updateUser(state, action) {
      const { id, name, work, address, birthDate } = action.payload
      const existingUser = state.find(user => user.id === id);
      if (existingUser) {
        existingUser.name = name
        existingUser.work = work
        existingUser.address = address
        existingUser.birthDate = birthDate
      }
    },
    deleteUser(state, action) {
      const { id } = action.payload
      state = state.filter(user => user.id !== id);
    }
  }
})

export const { addUser, updateUser, deleteUser, getUser } = userSlice.actions



export default userSlice.reducer

export const getUserDispatch = () => dispatch => {

  let user

  if (localStorage.getItem('user')) {
    user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    dispatch(getUser(user))
  }


}

export const addUserDispatch = data => dispatch => {

  dispatch(addUser({
    id: initialState.length + 1,
    ...data
  }))

}

export const updateUserDispatch = (id, data) => dispatch => {

  dispatch(updateUser({
    id,
    ...data
  }))
}

export const deleteUserDispatch = (id) => dispatch => {

  dispatch(deleteUser({ id }))
}
