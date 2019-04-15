class Card{
  constructor(cardDetails){
      this.suit = cardDetails.suit;
      this.number = cardDetails.number;
      this.color = cardDetails.color;
      this.unicode = cardDetails.unicode;
  }

  getUnicode(){
      return this.unicode;
  }

  getColor(){
      return this.color;
  }

  getRank(){
      return +this.number;
  }

  getSuit(){
      return this.suit;
  }

  static getEmptyCard(){
      return new Card({
          suit:"none",
          number:"0",
          color:"grey",
          unicode:"\u{1F0A0}"
      })
  }
}

export default Card