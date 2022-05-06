// PRIMARY RESPONSE
export interface IMeta {
  title: string
  description: string
}

export interface IPrimaryChildren {
  type: string
  title: string
  slug: string
}

export interface IResult {
  title: string
  type: string
  slug: string
  description: string
  children: IPrimaryChildren[] | IContentChildren[]
}

// CONTENT RESPONSE
export interface IVideo {
  provider: string
  link: string
  durationInMinutes: number
}

export interface IPdf {
  title: string
  description: string
  link: string
}

export interface IText {
  title: string
  html: string
}

export interface IAnswer {
  text: string
  isCorrect: boolean
}

export interface IExercice {
  question: string
  answers: IAnswer[]
  correction: string
}

export interface IContentChildren {
  type: string
  data: IVideo | IText | IExercice
}

// FULL RESPONSE
export interface IResponse {
	meta: IMeta
	result: IResult
}