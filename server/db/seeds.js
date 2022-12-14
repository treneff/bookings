use management;
db.dropDatabase();

db.guests.insertMany([
    {
        name: 'John Snow',
        email: 'john.snow@gmail.com',
        checkedStatus: true,
    },
    {
        name: 'Jane Doe',
        email: 'jane.doe@gmail.com',
        checkedStatus: true,
    },
    {
        name: 'Fred Flintstone',
        email: 'bedrock@gmail.com',
        checkedStatus: false,
    },

]);
