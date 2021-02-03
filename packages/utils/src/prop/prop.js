import { curry } from '@frisby/core'

function prop(property, object) {
  return object[property]
}

export default curry(prop)
