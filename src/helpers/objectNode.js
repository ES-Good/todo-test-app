import { uniqueNameGroups } from './uniqueGroups'

export function objectNode (inputArr) {
  const group = []
  const groupsName = uniqueNameGroups(inputArr)

  groupsName.forEach(element => {
    const item = {
      group: element,
      items: []
    }
    group.push(item)
  })

  group.forEach((groupName, index) => {
    addItemInGroup(groupName.group, index)
  })

  function addItemInGroup (nameGroups, indexGroupName) {
    inputArr.forEach(element => {
      if (element.group === nameGroups) {
        group[indexGroupName].items.push(newItem(element))
      }
    })
  }

  function newItem (Item) {
    return {
      name: Item.name,
      id: Item.id,
      value: Item.value,
      isNew: Item.isNew
    }
  }

  return group
}
