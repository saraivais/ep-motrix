'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('contents', [
      {
        user_id: 1,
        title: 'Lorem Ipsum 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sapien ligula, posuere quis dui sed, facilisis accumsan sapien. Ut fermentum lectus vel varius gravida. Cras cursus arcu nec dui tempus, non pulvinar magna accumsan. Phasellus lobortis laoreet lorem. Duis aliquam rhoncus orci, vitae placerat eros dictum vitae. Ut semper nulla eu nibh fringilla, quis ullamcorper nisl facilisis. Nunc volutpat tincidunt nisl, non pharetra nibh volutpat eu. Quisque at luctus elit, in luctus justo. Suspendisse potenti. Morbi et odio nunc. Nam quam nulla, dignissim vitae porttitor ut, suscipit id sapien. Nunc non facilisis dolor. Mauris iaculis pellentesque consectetur.',
        created: new Date(2022, 9, 23),
        updated: new Date(2022, 9, 23),
      },
      {
        user_id: 2,
        title: 'Lorem Ipsum 2',
        body: 'Nullam at varius neque. Ut a arcu vitae neque gravida sollicitudin vitae quis enim. Morbi nunc nibh, suscipit vestibulum semper a, ultrices sed nisl. Aenean sagittis metus ac enim egestas iaculis. Integer aliquet magna magna, quis dictum nunc posuere in. Quisque ultricies ultrices nulla, a tincidunt arcu cursus vitae. Suspendisse potenti. Vivamus tincidunt, dolor vulputate dignissim vulputate, nisi nisi ornare nulla, condimentum mollis orci ante pharetra ante.',
        created: new Date(2022, 9, 24),
        updated: new Date(2022, 9, 24),
      },
      {
        user_id: 3,
        title: 'Lorem Ipsum 3',
        body: 'Donec eros nibh, posuere nec maximus laoreet, dignissim sit amet tellus. Suspendisse potenti. Vestibulum quis consequat nibh, at maximus neque. Aenean dapibus, odio a dictum consequat, ligula sem lobortis neque, eget scelerisque nulla turpis nec magna. Sed vel felis vitae lacus mattis euismod. Maecenas condimentum dapibus augue, ut luctus odio ornare vel. Sed sed sagittis magna. Morbi a dui sodales, tincidunt risus eget, vestibulum leo. Duis molestie risus mollis, cursus quam eu, pretium ipsum. Mauris pretium dictum ligula, tempus fringilla magna egestas et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vitae sem dui. Aliquam a suscipit nisl.',
        created: new Date(2022, 9, 25),
        updated: new Date(2022, 9, 25),
      },
    ], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('contents', null, {});
  },
};
