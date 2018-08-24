function produceDrivingRange(blockRange){
  return function(trip){
    if(blockRange > trip){
      return `${blockRange-trip} blocks out of range`
    }
  }
}
