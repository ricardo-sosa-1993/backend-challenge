export interface IMappingRule {
  condition(num: number): boolean;
  value: any;
}
