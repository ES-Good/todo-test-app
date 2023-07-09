export function uniqueNameGroups (arr) {
  const nameGroups = []
  for (const key of arr) {
    if (!nameGroups.includes(key.group)) {
      nameGroups.push(key.group)
    }
  }
  return nameGroups
}
