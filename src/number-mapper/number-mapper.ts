import { IMappingRule } from "./types";

/**
 * This class takes an array of rules in precedence order and maps a number
 * to a certain value based on those rules via the map method
 */
export class NumberMapper {
  constructor(private mappingRules: IMappingRule[] = []) {}

  /**
   * Takes a number and maps it to a value based on the mapping rules
   */
  map(num: number): any {
    const satisfiedRule = this.mappingRules.find(mappingRule => !!mappingRule.condition(num));
    if (satisfiedRule) {
      return satisfiedRule.value;
    }
    return num;
  }
}
