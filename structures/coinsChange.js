def dpMakeChange(coinValueList,change,minCoins):
   for cents in range(change+1):
      coinCount = cents
      for j in [c for c in coinValueList if c <= cents]:
            if minCoins[cents-j] + 1 < coinCount:
               coinCount = minCoins[cents-j]+1
      minCoins[cents] = coinCount
   return minCoins[change]

  
# min_c = coin_change([1,2,3,5,10], 23)
min_c = dpMakeChange([1,2,3,5,10], 23, [])
print(min_c)
