import { IDocument } from "../../../interfaces";
import { IMeta } from "../../../interfaces/kakao-map/meta.interface";

export class KakaoMapResponse {
  meta: IMeta;
  documents: IDocument[];
}
