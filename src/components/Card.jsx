export function Card({ name, role, email }) {
  return(
    <>
      <h2>{name}</h2>
      <p>{role}</p>
      <p>{email}</p>
    </>
  )
}