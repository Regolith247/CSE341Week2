displayMessage = (req, res) => {
    const data = 
    'Name of someone I have met: Adam Savage';
    res.status(200).send(data);
};

module.exports = {
    displayMessage,
};