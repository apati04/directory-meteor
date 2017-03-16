import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';

Meteor.startup(() => {
  // generate data

  // check if data exists in collection
  // see if collection has any records
  const numberRecords = Employees.find({}).count();
  if(!numberRecords) {
    // Generate some data...
  }
});
