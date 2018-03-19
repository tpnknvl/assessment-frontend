import Route       from 'assessment-frontend/baseRoute';
import EmberObject from '@ember/object';

export default Route.extend({
  renderTemplate() {
    this.render( 'products.show', {
      into: 'application'
    } );
  },
  model( params ) {
    const model     = this.modelFor('products');
    const product   = model.get( 'products' ).findBy( 'id', params.id );
    const publisher = model.get( 'publisher' );
    const title     = product.get( 'name' );

    return EmberObject.create( {
      title,
      product,
      publisher
    } );
  }
} );
