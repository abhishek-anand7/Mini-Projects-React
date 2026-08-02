export function TemperatureDisplay({ temperature }) {

  function weather() {
    if (temperature > 30) {
      return "Hot (above 30)"
    } else if (temperature >= 20 &&temperature <= 30) {
      return "😊 Pleasant (20–30)"
    } else {
      return "❄️ Cold (below 20)"
    }
  }

  return(
    <>
      <p>{weather()}</p>
    </>
  )
}

/* Mistakes:-
1. else if (temperature < 20 ||temperature > 30)
Choose wrong Aithmetic & Logical operator.

2. <p>{weather}</p>
Simply displayed the function instead of calling it.
*/