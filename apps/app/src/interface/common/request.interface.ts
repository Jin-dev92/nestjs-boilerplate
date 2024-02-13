export interface IRequest<QueryType, BodyType> {
  query: QueryType;
  body: BodyType;
}
