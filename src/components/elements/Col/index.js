import ElCol from './src/Col';

ElCol.install = (vue) => {
  vue.component(ElCol.name, ElCol);
};

export default ElCol;
