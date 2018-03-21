import Component from '@ember/component';

export default Component.extend({
  data: null,
  actions: {
    click( e ) {
      e.preventDefault();
      console.log( 'Clicked' );
    }
  }
});
