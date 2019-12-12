const mongoose = require('mongoose');
const Event = require('./Event');

describe('Event model', () => {
  it('has a required recipeId', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.recipeId.message).toEqual('Path `recipeId` is required.');
  });

  it('has a required dateOfEvent', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.dateOfEvent.message).toEqual('Path `dateOfEvent` is required.');
  });

  it('has a required rating', () => {
    const event = new Event();
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` is required.');
  });

  it('has a rating 0 or above', () => {
    const event = new Event({
      rating: -1
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (-1) is less than minimum allowed value (0).');
  });

  it('has a rating 5 or below', () => {
    const event = new Event({
      rating: 6
    });
    const { errors } = event.validateSync();

    expect(errors.rating.message).toEqual('Path `rating` (6) is more than maximum allowed value (5).');
  });

  it('gets the day of a event using virtual', () => {
    const event = new Event({
      dateOfEvent: new Date('1995-12-17T03:24:00')
    });
    expect(event.day).toEqual(17);
  });

  it('sets the day of a event using virtual', () => {
    const event = new Event({
      dateOfEvent: new Date('1995-12-17T03:24:00')
    });
    event.day = 12;
    expect(event.day).toEqual(12);
  });

  it('gets the month of a event using virtual', () => {
    const event = new Event({
      dateOfEvent: new Date('1995-12-17T03:24:00')
    });
    expect(event.month).toEqual(12);
  });

  it('sets the month of a event using virtual', () => {
    const event = new Event({
      dateOfEvent: new Date('1995-12-17T03:24:00')
    });
    event.month = 1;
    expect(event.month).toEqual(1);
  });

  it('gets the year of a event using virtual', () => {
    const event = new Event({
      dateOfEvent: new Date('1995-12-17T03:24:00')
    });
    expect(event.year).toEqual(1995);
  });

  it('sets the year of a event using virtual', () => {
    const event = new Event({
      dateOfEvent: new Date('1995-12-17T03:24:00')
    });
    event.year = 2020;
    expect(event.year).toEqual(2020);
  });
});
