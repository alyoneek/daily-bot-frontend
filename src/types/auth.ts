export interface ISignInRequest {
  email: string;
  password: string;
}

export interface ISignUpRequest {
  email: string;
  password: string;
  confirm: string;
}

export interface ITokenResponse {
  token: string;
}
