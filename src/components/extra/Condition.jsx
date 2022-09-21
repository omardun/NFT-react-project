export default function Condition ({ test = true, success = <></>, fail = <></> }) {
  return test ? success : fail
}
