import Ember from 'ember';
import Component from '@ember/component';

export default Component.extend({
  data: null,
  columns: Ember.computed( 'data', function(){
    console.log('sdfdsf')
    const data = this.get( 'data.firstObject' );
    console.log( Object.keys( data ) )
    return Object.keys( data );
  })
});
