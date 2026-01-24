export interface Workflow {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  context: string;
  objective: string;
  flow: string[];
  stack: string[];
  result: string;
  image: string;
  imageAlt: string;
  repo?: string;
}
