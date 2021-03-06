import Model, { attr } from '@ember-data/model';

export default class CommonModel extends Model {
  @attr version;
  @attr changes;

  get features() {
    return (this.changes || []).filterBy('feature');
  }

  get deprecations() {
    return (this.changes || []).filterBy('deprecation');
  }
}
