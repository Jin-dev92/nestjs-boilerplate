export interface IGetHeathCheck {
  environment: Environment;
}

export enum Environment {
  LOCAL = 'local',
  DEVELOPMENT = 'development',
  PRODUCTION = 'production',
}
