export function NotificationBadge({ notifications }) {
  return (
    <>
      <p>{notifications ? `Notifications ${notifications}` : "No Notifications"}</p>
    </>
  );
}

/* A better approach

If you want to show Notifications 0 when there are zero notifications, check specifically for 0 or greater:

export function NotificationBadge({ notifications }) {
  return (
    <p>
      {notifications > 0
        ? `Notifications ${notifications}`
        : "No Notifications"}
    </p>
  );
}
*/

/* Why does 234 value work in the App component because In JavaScript, values are either truthy or falsy and 234 is truthy value.
*/