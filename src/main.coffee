square = (x) -> x * x
cube = (x) -> square(x) * x

fill = (container, liquid = 'water') ->
  "Filling the #{container} with #{liquid}"

