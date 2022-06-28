function smartGarbage(trash, bins) {
  // increase the type of garbage based on key/name
  bins[trash]++
  
  // return the updated object
  return bins
}

console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }))