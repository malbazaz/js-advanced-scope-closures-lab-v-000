function produceDrivingRange(range){
  return function(blockRange){
    return range > blockRange;
  }
}
