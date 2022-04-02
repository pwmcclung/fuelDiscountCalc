function fuelPrice(litres, pricePerLitre) {
  let totalCost;
  let discount;
  if (litres >=10){
    totalCost = litres * (pricePerLitre - 0.25)
    return Number(totalCost.toFixed(2))
  }else if (litres >=8){
    totalCost = litres * (pricePerLitre - 0.20)
    return Number(totalCost.toFixed(2))
  }else if (litres >=6){
    totalCost = litres * (pricePerLitre - 0.15)
    return Number(totalCost.toFixed(2))
  }else if (litres >=4){
    totalCost = litres * (pricePerLitre - 0.10)
    return Number(totalCost.toFixed(2))
  }else if (litres >= 2){
    totalCost = litres * (pricePerLitre - 0.05)
    return Number(totalCost.toFixed(2))
  }else {
    return litres * pricePerLitre
  }
}
