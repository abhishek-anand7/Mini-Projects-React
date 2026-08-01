export function ProfileCompletion({ percentage }) {
  
  return(
    <>
      <p>
        Profile Completion
      </p>
      <p>
        {percentage === 100
          ? "✅ Completed"
          : `⏳ In Progress (${percentage}%)`}
      </p>
    </>
  )
}