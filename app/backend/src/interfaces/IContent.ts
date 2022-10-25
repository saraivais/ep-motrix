interface IContent {
  id: number,
  userId: number,
  title: string,
  body: string,
  user?: {
    email: string,
  },
  history?: Array<IContent>,
}

export default IContent;
