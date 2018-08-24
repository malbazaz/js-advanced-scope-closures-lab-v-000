  function produceDrivingRange(blockRange){
    return function(street1, street2){
      const st1 = parseInt(street1,10);
      const st2 = parseInt(street2,10);
      const trip = Math.abs(st1-st2);
      // const st2 = street2.replace(/\D/g,'');
      if(blockRange > trip){
        return `within range by ${blockRange-trip}`
      } else {
        return `${Math.abs(trip-blockRange)} blocks out of range`
      }
    }
  }

  function produceTipCalculator(pct){
    const adjPct = pct
    return function(amt){
      return amt *(1+adjPct);
    }
  }
