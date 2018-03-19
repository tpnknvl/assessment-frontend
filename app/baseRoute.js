import Route from '@ember/routing/route';

export default Route.extend({
  setDocumentTitle() {
    const model = this.modelFor( this.routeName );
    document.title = model.get( 'title' );
  },
  actions: {
    didTransition() {
      this.setDocumentTitle();
    }
  }
})
