const db = require('./db')

const Query = {
  Data: () => db.Data
}

const Mutation= {
  addDessert(_, { Dessert,calories,fat,carb, protein}) {
    const dataID =
    db.Data.reduce((id, data1) => {
          return Math.max(id, data1.id);
        }, -1) + 1;
    let id = dataID;
    const data = { id,Dessert,nutritionInfo:{calories,fat,carb, protein} };
    
    db.Data.push(data);
    return data;
  },

  deleteDessert(_,{dataId}) {
    const data = db.Data.find(
      ({ id }) => dataId === id
    );
    //db.Data.pop(data);
    const index = db.Data.indexOf(data, 0);
if (index > -1) {
  db.Data.splice(index, 1);
  return data;
}
  }  
}

module.exports = {
  Mutation,
  Query
}