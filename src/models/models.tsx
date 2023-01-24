export type fetchResults = {
  result: any;
  error: boolean;
  errorResponse: any;
};

export type endorsedElementsModel = {
  name: string;
  colorHexCodes: string[];
  score: number;
};

export type userProfileModel = {
  adjectives: string[];
  description: string;
  id: string;
  mostEndorsedElements: endorsedElementsModel[];
  profileUrl: string;
  userName: string;
};

export type summaryTableValues = {
  text: string;
  isHighlighted: boolean;
};

export type summaryTableRows = {
  title: string;
  values: summaryTableValues[];
};

export type Traits = {
  name: string;
  score: number;
  colorHexCodes: string[];
};
