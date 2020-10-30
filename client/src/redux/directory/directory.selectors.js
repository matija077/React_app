import { createSelector } from 'reselect';

function selectDirectory(state) {
   return state.directory;
}

export var selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);