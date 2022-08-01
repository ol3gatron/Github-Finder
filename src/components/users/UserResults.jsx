import {useEffect, useState} from "react"
import Spinner from "../layout/Spinner"

function UserResults() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchUsers() {
    const res = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })
    const data = await res.json()
    setUsers(data)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => <h1>{user.login}</h1>)}
      </div>
    )
  } else {
    return (
      <>
        <Spinner/>
        <h3>Loading...</h3>
      </>
    )
  }
}
export default UserResults