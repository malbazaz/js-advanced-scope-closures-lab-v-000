function produceDrivingRange(blockRange){
  return function(trip){
    if(blockRange > trip){
      return `within range by ${blockRange-trip}`
    } else {
      return `${Math.abs(trip-blockRange)} blocks out of range`
    }
  }
}
