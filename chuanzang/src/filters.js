const regtDate = function(v) {
  const y =
   v.substring(0, 4)
  const m = v.substring(4, 6)
  const d = v.substring(6, 8)
  return y + '-' + m + '-' + d
}

export { regtDate }
