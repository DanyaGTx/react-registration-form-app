import React from 'react'
import styled from 'styled-components'
const StyledUeserList = styled.div`
  p{
    margin-top: 10px;
  }
`
const UserList = ({ users }) => {
  return (
    <StyledUeserList>
      {users.length > 0 && <h1>All Users:</h1>}
      {users.length > 0 &&
        users.map((user, id) =>
          <div key={id}>
            <h2>User {id + 1}</h2>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Telephone: {user.tel}</p>
            <p>Email: {user.email}</p>
            <p>Gender: {user.gender}</p>
            <p>Address: {user.adress}</p>
            <hr />
          </div>)}
    </StyledUeserList>
  )
}

export default UserList