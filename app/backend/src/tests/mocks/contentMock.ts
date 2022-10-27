const contentMocks = {
  allContent: [
    {
      id: 1,
      userId: 1,
      title: 'Donec scelerisque.',
      body: 'Mauris ultricies ligula vitae laoreet finibus. Nunc lacinia congue felis, id luctus diam lobortis nec. Donec gravida efficitur arcu, a bibendum arcu. Vivamus vehicula nibh nec elit posuere, et euismod turpis finibus. Vestibulum mollis nisl consequat faucibus fermentum. Proin rutrum, ante eu sodales iaculis, sapien risus consequat mi, non aliquam purus orci vitae nisi. Vestibulum turpis ante, volutpat sagittis facilisis finibus, eleifend nec nunc. Sed vitae pellentesque felis. Etiam sed odio id sapien molestie fringilla non vitae justo. Aliquam venenatis risus ligula, rutrum tristique dolor varius quis. Cras malesuada tempor efficitur. Etiam nulla purus, iaculis quis ante eget, ornare venenatis sem.',
      created: '2022-10-24T00:00:00.000Z',
      updated: '2022-10-24T00:00:00.000Z',
    },
    {
      id: 2,
      userId: 2,
      title: 'Quisque sed mauris ac elit.',
      body: 'Donec tempor tempor neque at luctus. Vestibulum volutpat nisi eu euismod accumsan. Phasellus at velit finibus, dictum leo in, ullamcorper tortor. Cras massa ligula, posuere id tortor eu, suscipit dapibus dolor. Vivamus metus tellus, iaculis et fermentum et, imperdiet sit amet nibh. Sed euismod maximus diam, ut euismod sem facilisis sed. Quisque id velit nisl. Sed et nisl scelerisque, porta eros eu, sollicitudin elit. Sed bibendum, velit at lacinia gravida, dui justo gravida augue, sed fringilla mauris justo eu tellus. Aliquam ipsum nibh, tincidunt vel iaculis sit amet, dapibus et felis. Nulla luctus dictum gravida. Nunc consequat, tortor at tempor semper, justo neque maximus neque, nec elementum nulla orci sed lectus. Vestibulum vitae felis nec quam mattis porttitor. Morbi molestie venenatis risus, a aliquam augue auctor sodales. Fusce urna nisl, tincidunt quis nulla vitae, tristique porta eros. Quisque ac massa non lectus lacinia rhoncus.',
      created: '2022-10-24T00:00:00.000Z',
      updated: '2022-10-24T00:00:00.000Z',
    },
    {
      id: 3,
      userId: 1,
      title: 'Vestibulum ante.',
      body: 'Praesent congue suscipit neque ut efficitur. Quisque lobortis sem non viverra scelerisque. Aliquam in massa cursus, cursus orci ut, vestibulum neque. Integer at lectus vestibulum, sollicitudin tellus id, bibendum massa. Mauris dictum ipsum at nisl tincidunt commodo. Praesent lobortis at purus ac ullamcorper. Aliquam pretium, ligula eget elementum tristique, dolor ipsum pretium velit, nec sagittis risus odio non tellus. Nam condimentum turpis eget efficitur faucibus. Suspendisse semper justo tincidunt leo congue sagittis. Proin nunc libero, tempus nec mi a, tincidunt pharetra urna. Duis a mattis nunc, aliquam commodo dolor. Donec scelerisque turpis eros, eget pulvinar erat blandit non. Etiam sem risus, semper ut mauris vitae, lobortis mollis nisl. Phasellus molestie metus ac tellus placerat, in aliquet diam scelerisque.',
      created: '2022-10-24T00:00:00.000Z',
      updated: '2022-10-24T00:00:00.000Z',
    },
    {
      id: 4,
      userId: 3,
      title: 'Pellentesque et orci.',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent gravida eget eros in ultricies. Etiam quis turpis dui. Aliquam dui orci, tristique non leo vel, sollicitudin tincidunt nisl. Ut facilisis nisl vitae arcu consequat gravida. Maecenas sed purus eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vestibulum porttitor quam eu lacinia.',
      created: '2022-10-24T00:00:00.000Z',
      updated: '2022-10-24T00:00:00.000Z',
    },
  ],
  oneContent: {
    id: 7,
    userId: 2,
    title: 'Integer sed tellus neque.',
    body: 'Aliquam malesuada eros nec lacinia convallis. Curabitur vel libero sollicitudin, elementum erat non, consequat tortor. Donec ullamcorper a ligula vitae accumsan. Aliquam tellus ipsum, varius ac bibendum eu, molestie vitae est. Cras nec scelerisque magna. Donec eget nibh in quam porttitor sodales. Proin congue mi nisl, non porta mauris tempor in. Sed quis rhoncus urna. Duis eget turpis aliquet, rhoncus sapien in, iaculis augue. Ut justo lorem, laoreet et tincidunt vitae, molestie ut dui. Donec nec rutrum felis. Praesent cursus mi ut mi tincidunt sollicitudin. In nulla leo, tempor vel tempus quis, pellentesque eu massa. Aliquam eu massa consectetur, efficitur purus nec, tincidunt lectus. Nam vestibulum consequat tortor, quis suscipit risus blandit at.',
    created: '2022-10-22T00:00:00.000Z',
    updated: '2022-10-24T00:00:00.000Z',
    user: {
      email: 'motrix@one.com',
    },
    history: [
      {
        title: 'Integer sed tellus neque.',
        body: 'Aliquam malesuada eros nec lacinia convallis. Curabitur vel libero sollicitudin, elementum erat non, consequat tortor. Donec ullamcorper a ligula vitae accumsan. Proin congue mi nisl, non porta mauris tempor in. Sed quis rhoncus urna. Duis eget turpis aliquet, rhoncus sapien in, iaculis augue. Ut justo lorem, laoreet et tincidunt vitae, molestie ut dui. Donec nec rutrum felis. Praesent cursus mi ut mi tincidunt sollicitudin. In nulla leo, tempor vel tempus quis, pellentesque eu massa. Aliquam eu massa consectetur, efficitur purus nec, tincidunt lectus. Nam vestibulum consequat tortor, quis suscipit risus blandit at.',
        updated: '2022-10-23T00:00:00.000Z',
      },
      {
        title: 'Integer sed tellus neque.',
        body: 'Aliquam malesuada eros nec lacinia convallis. Curabitur vel libero sollicitudin, elementum erat non, consequat tortor. Donec ullamcorper a ligula vitae accumsan. In nulla leo, tempor vel tempus quis, pellentesque eu massa. Aliquam eu massa consectetur, efficitur purus nec, tincidunt lectus. Nam vestibulum consequat tortor, quis suscipit risus blandit at.',
        updated: '2022-10-22T00:00:00.000Z',
      },
    ],
  },
  contentToCreate: {
    title: 'Duis ultrices justo at justo',
    body: 'Vivamus suscipit neque in ullamcorper condimentum. Morbi et lacus eu augue sollicitudin porta a sit amet mi. Donec varius nec nulla et blandit. Aenean non consectetur magna. Cras eu dui ut massa euismod pharetra sed ac risus. Vivamus consectetur, lorem in commodo feugiat, sem lacus molestie enim, id consectetur arcu purus sed ipsum. Nullam maximus at lectus a dapibus. Quisque eros arcu, mollis non blandit nec, tristique id augue. In ac egestas arcu, tristique varius mi. Nunc commodo sapien a odio tempus consequat.',
  },
  createdContent: {
    id: 12,
    title: 'Duis ultrices justo at justo',
    body: 'Vivamus suscipit neque in ullamcorper condimentum. Morbi et lacus eu augue sollicitudin porta a sit amet mi. Donec varius nec nulla et blandit. Aenean non consectetur magna. Cras eu dui ut massa euismod pharetra sed ac risus. Vivamus consectetur, lorem in commodo feugiat, sem lacus molestie enim, id consectetur arcu purus sed ipsum. Nullam maximus at lectus a dapibus. Quisque eros arcu, mollis non blandit nec, tristique id augue. In ac egestas arcu, tristique varius mi. Nunc commodo sapien a odio tempus consequat.',
    created: '2022-10-21T00:00:00.000Z',
    updated: '2022-10-21T00:00:00.000Z',
  },
  historyCreated: {
    id: 13,
    contentId: 12,
    title: 'Duis ultrices justo at justo',
    body: 'Vivamus suscipit neque in ullamcorper condimentum. Morbi et lacus eu augue sollicitudin porta a sit amet mi. Donec varius nec nulla et blandit. Aenean non consectetur magna. Cras eu dui ut massa euismod pharetra sed ac risus. Vivamus consectetur, lorem in commodo feugiat, sem lacus molestie enim, id consectetur arcu purus sed ipsum. Nullam maximus at lectus a dapibus. Quisque eros arcu, mollis non blandit nec, tristique id augue. In ac egestas arcu, tristique varius mi. Nunc commodo sapien a odio tempus consequat.',
    created: '2022-10-21T00:00:00.000Z',
    updated: '2022-10-21T00:00:00.000Z',
  },
  contentToUpdate: {
    title: 'Duis ultrices justo at justo - Updated',
    body: 'Vivamus suscipit neque in ullamcorper condimentum. Morbi et lacus eu augue sollicitudin porta a sit amet mi. Donec varius nec nulla et blandit. Aenean non consectetur magna. Cras eu dui ut massa euismod pharetra sed ac risus. Vivamus consectetur, lorem in commodo feugiat, sem lacus molestie enim, id consectetur arcu purus sed ipsum. Nullam maximus at lectus a dapibus. Quisque eros arcu, mollis non blandit nec, tristique id augue. Donec eget nibh in quam porttitor sodales. Proin congue mi nisl, non porta mauris tempor in. Sed quis rhoncus urna. Duis eget turpis aliquet, rhoncus sapien in, iaculis augue. In ac egestas arcu, tristique varius mi. Nunc commodo sapien a odio tempus consequat.',
  },
};

export default contentMocks;
