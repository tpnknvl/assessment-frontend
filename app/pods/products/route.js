import Ember       from 'ember';
import EmberObject from '@ember/object';
import Route       from 'assessment-frontend/baseRoute';
import sampleData  from 'assessment-frontend/models/fixtures/sample-data';

const Product = EmberObject.extend({
  name: null,
  data: [],
  productDataSubset: Ember.computed('data', function() {
    return this.get('data').slice(0, 7);
  })
})

export default Route.extend({
  model() {
    return EmberObject.create({
      title: 'Product Page - Index - XYZ Corp',
      products: [
        Product.create({
          id: 'abc',
          name: 'Product ABC',
          data: sampleData.map(o => EmberObject.create(o))
        }),
        Product.create({
          id: '123',
          name: 'Product 123',
          data: sampleData.map(o => EmberObject.create(o))
        })
      ],
      publisher: EmberObject.create({
        title: 'XYZ Corp',
        deliveryFrequency: 'daily',
        dataFrequency: 'weekly',
        reportingLag: '12 hours',
        history: '2005-11-01',
        coverage: '5000+ companies, 59 indicators'
      })
    });
  }
});
