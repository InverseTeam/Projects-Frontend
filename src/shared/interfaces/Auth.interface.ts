export interface IAuth {
  username: string;
  password: string;
}

export interface IToken {
  auth_token: string
}

export interface IError {
  data: {
    not_field_errors: string[];
  };
  status: number;
}

export interface IResponseAuth {
  data: IToken
}