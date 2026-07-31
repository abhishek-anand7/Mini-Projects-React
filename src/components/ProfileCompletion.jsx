export function ProfileCompletion({ percentage }) {
  
  return(
    <>
      <p>
        Profile Comletion
      </p>
      <p>
        {percentage === "100%"
          ? "✅ Completed"
          : "⏳ In Progress"}
      </p>
    </>
  )
}