import { Template } from 'meteor/templating';

Template.Add_Contact_Page.onCreated(function onCreated() {
  this.subscribe('Contacts');
});