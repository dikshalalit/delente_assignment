export default function Users({ users }) {
  return (
    <table>
      <thead>
        <td>Name</td>
        <td>Email</td>
        <td>Phone</td>
      </thead>
      <tbody>
        {users.map((user) => {
          return (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export async function getServerSideProps() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    return {
      props: {
        users,
      },
    };
  } catch (error) {
    console.error("Error fetching users:", error);
    return {
      props: {
        users: [],
      },
    };
  }
}
