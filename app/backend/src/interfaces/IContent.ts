interface IContent {
  id?: number,
  userId?: number,
  title: string,
  body: string,
  created?: Date,
  updated?: Date,
  user?: {
    email: string,
  },
  history?: Array<IContent>,
}

export default IContent;
