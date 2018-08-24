function produceDrivingRange(blockRange){
  return function(street1, street2){
  const st1 = street1.replace(/\D/g,'');
    if(blockRange > trip){
      return `within range by ${blockRange-trip}`
    } else {
      return `${Math.abs(trip-blockRange)} blocks out of range`
    }
  }
}
