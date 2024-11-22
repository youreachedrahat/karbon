validator alwaystrue {
  spend(_datum, _redeemer, _oref, _tx) {
    True
  }

  else(_) {
    fail
  }
}
