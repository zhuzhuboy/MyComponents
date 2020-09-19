import ElCol from './Col/index';
import ElRow from './Row/index';

const useComps = [ElCol, ElRow];

const install = (vue) => {
  useComps.forEach((comps) => {
    vue.component(comps.name, comps);
  });
};

export default {
  ElCol,
  ElRow,
  install,
};

export {
  ElCol,
  ElRow,
  install,
};
