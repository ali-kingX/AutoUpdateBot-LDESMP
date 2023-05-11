const { MessageEmbed } = require("discord.js");
const JokeAPI = require('sv443-joke-api');


module.exports = {
    name: 'joke',
    description: "This is a test command!",
    async execute(message, client, args) {
        function generateJoke() {
            fetch(
              "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=single&idRange=0-319"
            )
              .then((response) => {
                return response.json();
              })
              .then((data) => {
                const jokeEmbed = new MessageEmbed()
                .setTitle('Joke')
                .setColor('GREEN')
                .setDescription(`${data.joke}`);
    
            return message.reply({ embeds: [jokeEmbed] });
              });
          }
          
          generateJoke();

    }
}
