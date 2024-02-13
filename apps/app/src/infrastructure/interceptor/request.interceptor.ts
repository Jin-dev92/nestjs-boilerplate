import { ableToParseNumber } from "../util";
import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";

export class RequestInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    processRequestData(request.body);
    processRequestData(request.query);
    return next.handle();
  }
}

const processRequestData = (data: { [K: string]: any }) => {
  // number 캐스팅이 가능하면 number 형변환, 아니면 trim 처리
  const keys = Object.keys(data);
  for (const key of keys) {
    const current: string = data[key];
    if (ableToParseNumber(current)) {
      data[key] = Number(current);
    } else {
      data[key] = current.trim();
    }
    if (typeof JSON.parse(data[key]) === "object") {
      processRequestData(data[key]);
    }
  }
};
