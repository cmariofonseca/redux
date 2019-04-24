const initState = {
  projects: [
    {
      id: '1',
      title: 'Collect all the stars',
      content: 'blah, blah, blah',
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT': console.log('Created project', action.project);
    break;
    default: console.log(':´(');
  }
  return state;
};

export default projectReducer;