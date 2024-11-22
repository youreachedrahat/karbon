validator alwaystrue {
  spend(datum, redeemer, oref, tx) {
    True
  }

  else(_) {
    fail
  }
}
