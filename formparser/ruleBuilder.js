import ConditionMap from './conditionMap'

export default class RuleBuilder {
  /**
     * @param {案卡标识} cardId
     */
  constructor (cardId) {
    this.rules = {}
    this.cardId = cardId
  }
  /**
     * 注册规则
     * @param {数据库规则表达式} rules
     */
  register (rules) {
    rules.forEach(rule => {
      let arranges = rule.expression.split(' ')
      let pattren = /(.+)=@(.+){}/
      arranges.forEach(arrange => {
        pattren.test(arrange)
        Reflect.set(this.rules, RegExp.$1, [])
        let validator = this.generateValidator(RegExp.$2, rule.actions, rule.errormsg)
        this.rules[RegExp.$1].push({ validator: validator, trigger: 'change' })
      })
    })
    return this.rules
  }

  /**
     * 生成验证器
     * @param {条件} condition
     * @param {副作用} actions
     * @param {错误提示} errormsg
     */
  generateValidator (condition, actions, errormsg) {
    let validator = (rule, value, callback) => {
      let preCondition = ConditionMap.get(condition)(value)
      let isValid = this.peggingAction(actions, preCondition)
      isValid ? callback() : callback(new Error(errormsg))
    }
    return validator
  }

  /**
     * 行为溯源
     * @param {行为表达式} actionExpressions
     */
  peggingAction (actionExpressions, preCondition) {
    let pattrens = [
      [/(.+)=@MustBe{@(.+){}}/, 2],
      [/(.+)=@MustBe{@([a-zA-Z]+){&(.+)}}/, 3]
    ]

    let isValid = true
    pattrens.forEach(p => {
      let actions = actionExpressions.split(' ')
      actions.forEach(actionExpression => {
        let match = p[0].test(actionExpression)
        let form = JSON.parse(localStorage.getItem(this.cardId))
        if (match) {
          if (p[1] === 2) { // 二元表达式
            ConditionMap.get(RegExp.$2)(RegExp.$1, preCondition)
          }
          if (p[1] === 3) { // 三元表达式 有返回值
            if (preCondition) {
              isValid = isValid && ConditionMap.get(RegExp.$2)(form[RegExp.$1], form[RegExp.$3])
            } else {
              isValid = true
            }
          }
        }
      })
    })
    return isValid
  }
}
