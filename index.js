function produceDrivingRange(range){
  return function(trip){
    return range > blockRange;
  }
}
