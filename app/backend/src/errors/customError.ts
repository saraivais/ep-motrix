type CustomErrorParam = {
  msg: string,
  code: number,
  alias: string,
};

export default class CustomError extends Error {
  public code: number;

  public codeAlias: string;

  constructor({ msg, code, alias }: CustomErrorParam) {
    super(msg);
    this.code = code;
    this.codeAlias = alias;
  }
}
