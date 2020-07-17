const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(()=>console.log('Connected to MongoDB...'))
    .catch(()=>console.log('Could not connect to MongoDB...'));

    const flashCard = new mongoose.Schema({
        topSide: String,
        bottomSide: String,
        date: {type: Date, default: Date.now }
    });

    const FlashCard = mongoose.model('FlashCard',flashCard);

    async function createCard()
    {   
        const result = await card.save();
        console.log(result);
    }

    createCard();