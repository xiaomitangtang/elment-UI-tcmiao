import EventBus from './eventBus'
import * as Const from './parseConst'
const conditionMap = new Map()
conditionMap.set(Const.IsNotNull, v => v.length > 0)
conditionMap.set(Const.IsNull, v => v === '' || v === null)
conditionMap.set(Const.GreaterAndEqual, (a, b) => (typeof (a + b) === 'number') ? a >= b : false)
conditionMap.set(Const.Disabled, (prop, preCondition) => {
  EventBus.$emit('Disabled', {preCondition, name: prop})
})
export default conditionMap
