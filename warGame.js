function shuffle(cards)
    {
        let randomCards = [];
        let arrayIndexes =  [...Array(cards.length).keys()];
        let totalCards = cards.length;
    for (let i = 0; i < totalCards; i++)
        {
        let card;

        let mapIndex = Math.floor(Math.random() * (arrayIndexes.length - 1));
        let index = arrayIndexes[mapIndex];
        card = cards[index];
        arrayIndexes.splice(mapIndex, 1);

        if ((i === (totalCards - 1)) && (arrayIndexes.length === 0))
            {
        // If you choose to set totalItems to a value larger than your dataset,
        // this will re-initialize your array indexes, but you will end up with
        // duplicates in your results. If you don't want duplicates, just make
        // sure totalItems is set to items.length.

        arrayIndexes = [...Array(cards.length).keys()];
            }
            randomCards.push(card);
        }
            return randomCards;
    }
   
   
     let rankArray =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; //A=1, J=11, Q=12, K=13
     let suitArray = ['h', 'd', 's', 'c'];

        let deckArray = [];
        let deckRank = [];
        let shuffledDeck = []; //shuffled deck array
        let p1 = [];  //card holdings of player 1
        let p2 = []; //card holdings of player 2

    for(var i=0; i<13; i++)
    {
        for (var j=0; j<4; j++)
        {
        deckArray.push(rankArray[i] + suitArray[j]) ;
        }
    }
   
     for(var m=0; m<52; m++)
    {
        deckRank.push(deckArray[m].match(/(\d+)/g));
        //deckRank.map(Number) ;//https://stackoverflow.com/questions/11782428/removing-quotes-from-each-string-in-an-array-javascript
    }
   
    shuffledDeck = shuffle(deckRank);
    //console.log(shuffledDeck);
    //////////////////////////////////////////////////////////////////////
   
     for(var n=0; n<52; n++)
      {
        if (n%2 == 0)
        {
            p1.push(shuffledDeck[n]); //p1 array is now populated
        }
        else
        {
            p2.push(shuffledDeck[n]); //p2 array is now pupulated
        }
      }
     
      //console.log('p1 before loop:', p1);
      //console.log('p2 before loop:', p2);
      //console.log(p1.length != 0 && p2.length != 0);
     
     
      while (p1.length != 0 || p2.length != 0)
      {
       for (let z=0; z<26; z++)
          {
            while(p1[z] != p2[z])
            {
                if(p1[z] - p2[z] < 0)
                {
                    p1.splice(z, 1); //p1 array is spliced by the zth element
                    p2.splice(p2.length - 1, 0, p1.splice(z, 1), p2.splice(z, 1)); //the two drawn cards are placed at the end of the p2 array
                }
                else  (p1[z] - p2[z] > 0)  
                {
                    p2.splice(z, 1);
                    p1.splice(p1.length - 1, 0, p1.splice(z, 1), p2.splice(z, 1));
                }
            }
                p1.splice(z, 4); 
                p2.splice(z, 4);
            }
        console.log('p12 after loop:', p1);
        console.log('p22 after loop:', p2);
       }
          
       
       
          //console.log('p1 after loop:', p1);
          //console.log('p22 after loop:', p2);

         /*
          if (p1.length == 0)
          {
              console.log(`game over! player 2 wins!`);
          }
          else if (p2.length == 0)
          {
              console.log(`game over! player 1 wins!`);
          }
          else
          {
              console.log(`its a draw`);
          }
          */

