export interface IMeta {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
  same_name: {
    region: any[];
    keyword: string;
    selected_region: string;
  };
}
