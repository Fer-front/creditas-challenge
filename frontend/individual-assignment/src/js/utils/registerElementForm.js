export default function registerElementForm (ID) {
  const element = {}

  for (const idKey in ID) {
    element[idKey] = document.getElementById(ID[idKey])
  }

  return element
}
