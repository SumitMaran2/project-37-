class Contestent {
    constructor(){
      this.index = null;
      //this.distance = 0;
      this.name = null;
      this.answer = null;
    }
  
    getCount(){
      var contestentCountRef = database.ref('contestantCount');
      contestentCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var contestantIndex = "Contestants/contestent" + this.index;
      database.ref(contestantIndex).set({
        name: this.name,
        answer:this.answer
      });
    }
  
    static getcontestentInfo(){
      var contestentInfoRef = database.ref('Contestants');
      contestentInfoRef.on("value",(data)=>{
        allPeople = data.val();
      })
    }






  }
  