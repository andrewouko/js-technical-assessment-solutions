function FirstFactorial(num) { 

  if(num == 1 || num == 0) return 1

  if(num > 1) return num * FirstFactorial(num - 1)

}